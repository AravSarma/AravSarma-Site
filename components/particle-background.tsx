"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 5

    const count = 4000
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const home = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    // Site palette: deep purple, mid purple, lavender, soft white
    const colorPalette = [
      new THREE.Color("#4b3b6e"),
      new THREE.Color("#7c6b9e"),
      new THREE.Color("#b8a8d8"),
      new THREE.Color("#f5eff7"),
    ]

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 4 + Math.random() * 2

      home[i3]     = r * Math.sin(phi) * Math.cos(theta)
      home[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      home[i3 + 2] = r * Math.cos(phi)

      positions[i3]     = home[i3]
      positions[i3 + 1] = home[i3 + 1]
      positions[i3 + 2] = home[i3 + 2]

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i3]     = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.028,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const mouse = { x: -999, y: -999, active: false }
    const raycaster = new THREE.Raycaster()
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(new THREE.Vector2(x, y), camera)
      const intersectPoint = new THREE.Vector3()
      raycaster.ray.intersectPlane(plane, intersectPoint)
      mouse.x = intersectPoint.x
      mouse.y = intersectPoint.y
      mouse.active = true
    }

    const onMouseDown = () => {
      const pos = points.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const dx = pos[i3] - mouse.x
        const dy = pos[i3 + 1] - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 1.5) {
          const force = (1.5 - dist) * 0.8
          velocities[i3]     += (dx / dist) * force
          velocities[i3 + 1] += (dy / dist) * force
        }
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mousedown", onMouseDown)

    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const pos = points.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < count; i++) {
        const i3 = i * 3

        if (mouse.active) {
          const dx = mouse.x - pos[i3]
          const dy = mouse.y - pos[i3 + 1]
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 2.5) {
            const pull = (2.5 - dist) * 0.0005
            velocities[i3]     += dx * pull
            velocities[i3 + 1] += dy * pull
          }
        }

        velocities[i3]     += (home[i3]     - pos[i3])     * 0.01
        velocities[i3 + 1] += (home[i3 + 1] - pos[i3 + 1]) * 0.01
        velocities[i3 + 2] += (home[i3 + 2] - pos[i3 + 2]) * 0.01

        pos[i3]     += velocities[i3]
        pos[i3 + 1] += velocities[i3 + 1]
        pos[i3 + 2] += velocities[i3 + 2]

        velocities[i3]     *= 0.92
        velocities[i3 + 1] *= 0.92
        velocities[i3 + 2] *= 0.92
      }

      points.geometry.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
    }

    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("resize", onResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  )
}

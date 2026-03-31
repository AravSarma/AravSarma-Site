import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import profilePic from "@/public/arav-profile.jpg"
import ParticleBackground from "@/components/particle-background"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image - shown first on mobile */}
          <div className="flex justify-center order-first md:order-last">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-lg">
              <Image
                src={profilePic}
                alt="Arav Sarma"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Column */}
          <div className="space-y-5 md:space-y-6 text-center md:text-left order-last md:order-first">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Arav Sarma</h1>
              <p className="text-xl md:text-3xl font-medium text-[var(--accent)] mt-2">
                CS Student | Developer | Problem-Solver
              </p>
            </div>

            <p className="text-base md:text-lg text-[var(--muted-foreground)] text-balance leading-relaxed">
              I'm a Computer Science student at the University of Oregon with a passion for building innovative software
              solutions. Combining development expertise with entrepreneurial thinking, I'm driven by the intersection
              of AI and practical problem-solving.
            </p>

            <div className="flex gap-4 pt-2 md:pt-4 justify-center md:justify-start flex-wrap">
              <a href="#resume" className="btn-primary">
                View Resume
              </a>
              <a
                href="#contact"
                className="contact-cta"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 pt-2 md:pt-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/arav-sarma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-card transition-colors"
              >
                <Linkedin size={24} color="var(--accent)" />
              </a>
              <a
                href="https://github.com/AravSarma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-card transition-colors"
              >
                <Github size={24} color="var(--accent)" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function Home() {
  return (
    <div className="min-h-screen bg-(--background)">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <ScrollReveal delay={50}>
            <Skills />
          </ScrollReveal>
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <ScrollReveal delay={50}>
            <Resume />
          </ScrollReveal>
        </section>
        <section id="contact">
          <ScrollReveal delay={50}>
            <Contact />
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  )
}

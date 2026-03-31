import ScrollReveal from "@/components/scroll-reveal"

export default function About() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-(--foreground) mb-8 md:mb-12 text-balance">About Me</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Bio */}
          <ScrollReveal className="md:col-span-2" delay={100}>
            <p className="text-lg text-(--muted-text) leading-relaxed">
              I'm a Computer Science student at the University of Oregon, currently based in San Jose, California. With
              a foundation in Python, C, React, and TypeScript, I'm passionate about leveraging AI to solve real-world
              problems through software development.
            </p>
            <p className="text-lg text-(--muted-text) leading-relaxed mt-6">
              Beyond coding, I'm fascinated by entrepreneurship and business strategy. I'm experienced in project
              management, team leadership, and communicating complex ideas clearly. I thrive in collaborative
              environments where I can contribute both technical expertise and creative problem-solving to build
              products that matter.
            </p>
            <p className="text-lg text-(--muted-text) leading-relaxed mt-6">
              When I'm not coding or learning something new, I'm interested in understanding how technology can drive
              business growth and social impact.
            </p>
          </ScrollReveal>

          {/* Right Column - Key Facts */}
          <ScrollReveal delay={220}>
            <div className="bg-(--card) rounded-xl p-6 shadow-sm border border-(--border-color) h-fit">
              <h3 className="font-bold text-(--accent-primary) text-sm uppercase tracking-wide mb-6">Key Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-(--muted-text)">School</p>
                  <p className="font-medium text-(--foreground)">University of Oregon</p>
                </div>
                <div>
                  <p className="text-sm text-(--muted-text)">Major</p>
                  <p className="font-medium text-(--foreground)">Computer Science</p>
                </div>
                <div>
                  <p className="text-sm text-(--muted-text)">Minor</p>
                  <p className="font-medium text-(--foreground)">Entrepreneurship</p>
                </div>
                <div>
                  <p className="text-sm text-(--muted-text)">Location</p>
                  <p className="font-medium text-(--foreground)">San Jose, CA</p>
                </div>
                <div>
                  <p className="text-sm text-(--muted-text)">Interests</p>
                  <p className="font-medium text-(--foreground)">AI, Software Engineering, Data Analysis, Startups</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

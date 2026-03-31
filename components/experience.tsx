import ScrollReveal from "@/components/scroll-reveal"

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Oregon Software Consulting (OSC)",
      location: "Eugene, OR",
      dates: "Sept 2024 – Present",
      highlights: [
        "Worked with React and TypeScript to help build an auction site for the University of Oregon",
        "Collaborated with charities and non-profits to implement software solutions and streamline workflows",
      ],
    },
    {
      role: "Co-Creator & Developer",
      company: "Web and Marketing Agency",
      location: "San Jose, CA",
      dates: "June 2024 – Present",
      highlights: [
        "Built and ran a full-service web and marketing agency from the ground up",
        "Designed and developed custom websites for local businesses with automated scheduling and streamlined customer interactions",
        "Improved SEO and digital presence through strategic social media marketing",
      ],
    },
    {
      role: "Sales & Service",
      company: "City Sports Club & 24 Hour Fitness",
      location: "San Jose, CA",
      dates: "July 2023 – Sept 2023",
      highlights: [
        "Exceeded daily and weekly sales targets consistently, driving significant revenue growth",
        "Generated new leads through cold marketing, digital outreach, and in-person engagement",
        "Managed daily operations and membership enrollment using Microsoft Dynamics CRM",
      ],
    },
  ]

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-(--foreground) mb-8 md:mb-12 text-balance">Experience</h2>
        </ScrollReveal>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div className="bg-(--card) rounded-xl p-5 md:p-8 shadow-sm border border-(--border-color) card-hover">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-(--accent-primary)">{exp.role}</h3>
                    <p className="text-base md:text-lg font-medium text-(--foreground)">{exp.company}</p>
                    <p className="text-sm text-(--muted-text)">{exp.location}</p>
                  </div>
                  <span className="text-sm font-medium text-(--muted-text) md:whitespace-nowrap md:ml-4">{exp.dates}</span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-(--muted-text) flex gap-3">
                      <span className="text-(--accent-primary) font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

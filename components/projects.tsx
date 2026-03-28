import ScrollReveal from "@/components/scroll-reveal"

export default function Projects() {
  const projects = [
    {
      title: "Think.ly",
      description:
        "A think-tank and employment platform connecting students with student-run businesses, enabling mentorship, networking, and career development opportunities.",
      tech: ["React", "TypeScript", "Next.js", "Python", "SQL"],
    },
    {
      title: "Echo AI",
      description:
        "A hackathon project featuring real-time AI-powered voice interaction with text and voice synthesis. Built an intuitive frontend and connected it to a dynamic AI backend.",
      tech: ["Python", "AI/ML", "Voice Synthesis", "Real-time Processing"],
    },
    {
      title: "F1 Win Probability Predictor",
      description:
        "A machine learning model that predicts Formula 1 win probabilities using historical race data from FastF1 (2021–2024) and the confirmed 2025 driver lineup. The backend trains an XGBoost model on per-driver race features, while an interactive React frontend lets users enter any season and round to see the top 5 most likely winners.",
      tech: ["Python", "XGBoost", "FastAPI", "React", "Vite", "scikit-learn"],
    },
    {
      title: "Financial Portfolio Analyzer",
      description:
        "A full-stack application for tracking and analyzing personal investment portfolios. Visualizes asset allocation, historical performance, and risk metrics to help users make informed financial decisions.",
      tech: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
      status: "in-progress",
    },
    {
      title: "Cardiovascular Disease Analysis",
      description:
        "Statistical modeling and data analysis on CHD risks for post-menopausal women on HRT using A/B testing, hypothesis testing, and bootstrapping.",
      tech: ["Python", "Statistics", "Data Analysis", "Hypothesis Testing"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-(--foreground) mb-4 text-balance">Projects</h2>
          <p className="text-lg text-(--muted-text) mb-12">Building and learning through applied projects</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-(--card) rounded-xl p-6 shadow-sm border border-(--border-color) card-hover flex flex-col h-full relative">
                {project.status === "in-progress" && (
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="text-xs font-medium text-[#6aad3e]">in-progress</span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ animation: "orb-pulse 2s ease-in-out infinite" }}
                    />
                  </div>
                )}

                <h3 className="text-xl font-bold text-(--accent-primary) mb-3 pr-28">{project.title}</h3>
                <p className="text-black mb-4 flex-grow leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(75, 59, 110, 0.12)",
                        color: "var(--primary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

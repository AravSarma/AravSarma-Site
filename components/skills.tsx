import type React from "react"


export default function Skills() {
  const technicalSkills = ["Python", "C", "React", "JavaScript", "TypeScript", "HTML", "CSS", "Next.js"]

  const softSkills = ["Communication", "Public Speaking", "Leadership", "Team Collaboration"]

  const otherSkills = ["Data Analysis", "Problem-Solving", "Project Management"]

type SkillTagProps = {
  skill: string
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <span className="skill-tag">{skill}</span>
)


  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--foreground) mb-4 text-balance">Skills</h2>
        <p className="text-base md:text-lg text-(--muted-text) mb-8 md:mb-12">A blend of technical expertise and interpersonal strengths</p>

        <div className="space-y-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold text-(--accent-primary) mb-4 uppercase tracking-wide">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-semibold text-(--accent-primary) mb-4 uppercase tracking-wide">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-lg font-semibold text-(--accent-primary) mb-4 uppercase tracking-wide">Other Skills</h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

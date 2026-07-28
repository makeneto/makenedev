import { profile } from "@/data/profile"

export default function Experiences() {
  const { experiences } = profile

  return (
    <section className="experiences">
      <h1>Work Experience</h1>

      <ul className="experiences__timeline">
        {experiences.map((experience, index) => (
          <li className="experiences__work" key={index}>
            <span className="text-sm sm:xs">{experience.company}</span>
            <div>
              <h2>{experience.role}</h2>
              <p className="text-sm sm:text-sm">{experience.description}</p>
            </div>

            <span className="text-sm sm:text-xs">{experience.period}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

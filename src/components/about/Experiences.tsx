import { profile } from "../../data/profile"

export default function Experiences() {
  const { experiences } = profile

  return (
    <section className="experiences">
      <h1>Work Experience</h1>

      <ul className="experiences__timeline">
        {experiences.map((experience) => (
          <li className="experiences__work">
            <span className="sm:text-sm">{experience.company}</span>
            <div>
              <h2 className="sm:text-sm">{experience.role}</h2>
              <p className="sm:text-sm">{experience.description}</p>
            </div>
            <p className="sm:text-sm">{experience.period}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

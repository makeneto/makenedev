import { profile } from "../../data/profile"

export default function Experiences() {
  const { experiences } = profile

  return (
    <section className="experiences">
      <h1>Work Experience</h1>

      <ul className="experiences__timeline">
        {experiences.map((experience) => (
          <li className="experiences__work">
            <span>{experience.company}</span>
            <div>
              <h2>{experience.role}</h2>
              <p>{experience.description}</p>
            </div>
            <p>{experience.period}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

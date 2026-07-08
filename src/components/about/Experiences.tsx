import { profile } from "../../data/profile"

export default function Experiences() {
  const { experiences } = profile

  return (
    <section className="experiences">
      <h1>Work Experience</h1>

      <ul className="experiences__timeline">
        {experiences.map((experience) => (
          <li className="experiences__work">
            <span className="text-sm sm:text-[1rem]">{experience.company}</span>
            <div>
              <h2>{experience.role}</h2>
              <p className="text-sm sm:text-[1rem]">{experience.description}</p>
            </div>

            <p className="text-sm sm:text-[1rem]">{experience.period}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

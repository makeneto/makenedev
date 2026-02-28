import { skillOverall } from "../data/skillOverall"

export default function Skills() {
    return (
        <section className="skills">
            <div className="skills__hero">
                <span>My top</span>
                <h1>Skills.</h1>
            </div>

            <div className="skills__content">
                <div className="skills__content--block skills__description">
                    <p>
                        <span>
                            I don’t showcase skills to impress — I showcase
                            capability under pressure. Each percentage shows
                            where I take ownership, make trade-offs, and deliver
                            results. Skills aren’t badges; they’re tools to
                            solve real problems.
                        </span>
                        <span>
                            I focus on impact over perfection, clarity over
                            complexity, and results over vanity. Where I lead, I
                            set direction; where I execute, I adapt, learn fast,
                            and push boundaries.
                        </span>
                    </p>
                </div>

                <ul className="skills__content--block skills__list">
                    {skillOverall.map((skill) => (
                        <div className="skills__list--item">
                            <div>
                                <h2>{skill.name}</h2>
                                <p>{skill.percentage}%</p>
                            </div>

                            <div className="skills__bar">
                                <div
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    )
}

import { BiArrowFromLeft } from "react-icons/bi";
import styled from "styled-components"

const Documents = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 76%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
    align-items: center;

    & svg {
        font-size: 1.5rem;
        color: white;
    }

    .rotateLeft {
            transform: rotate(-6deg);
    }

    .rotateRight {
        transform: rotate(6deg);
    }

    &:hover {
        .rotateLeft {
            transform: rotate(0);
        }

        .rotateRight {
            transform: rotate(0);
        }
    }

    @media (max-width: 1280px) {
        top: 107%;
    }

    @media (max-width: 884px) {
        display: none;
    }
`

const Page = styled.div`
    background-color: var(--dark-blue-v2);
    text-align: start;
    border-radius: 0.5rem;
    width: 28rem;
    height: 42rem;
    overflow: hidden;
    scrollbar-width: none;
    position: relative;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
    transition: all .3s ease-in-out;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 6rem;
        background: linear-gradient(to top, var(--dark-blue-v2) 10%, transparent 100%);
        pointer-events: none;
        z-index: 1;
    }

    @media (max-width: 1280px) {
        height: 40rem;
    }
`;

const Controls = styled.div`
    background-color: inherit;
    padding: 0.7rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;
    position: sticky;
    top: 0;

    font-size: 0.8rem;
    font-weight: 400;
    color: gray;
    
    & div:first-child {
        display: flex;
        gap: 0.3rem;

        & span {
            border-radius: 50%;
            width: 0.7rem;
            height: 0.7rem;
            cursor: pointer;
        }

        & span:first-child {
            background-color: #ff5f56;
        }

        & span:nth-child(2) {
            background-color: #ffbd2e;
        }

        & span:last-child {
            background-color: #27c93f;
        }
    }
`

const TextPage = styled.div`
    margin-top: 1rem;
    color: white;
    background-color: var(--dark-blue-v2) ;
    overflow-y: scroll;
    padding: 0.3rem 2rem 1rem;
    font-weight: 400;

    & h2 {
        margin-top: 1.6rem;
        font-weight: 600;
        font-size: 1.3rem;
    }

    & h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    & p {
        font-weight: 400;
        color: #AFB7B4;
        font-size: 1rem !important;

        & span {
            color: white;
        }
    }
`

const Skills = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;

    & h3 {
        font-weight: 500;
        font-size: 1rem;
    }

    & li {
        margin-left: 17px;
        text-indent: 2px;
        color: #AFB7B4;
        font-weight: 400;
    }
`

const Lists = styled.div`
    margin-top: 1rem;
    display: grid;
    gap: 1rem;

    & h3 {  
        font-weight: 500;
        font-size: 1rem;
    }

    & li {
        margin-left: 20px;
        text-indent: 2px;
        font-weight: 400 !important;
        color: #AFB7B4;

    }

    & .strong {
        color: white !important;

        & strong {
            font-weight: 400;
        }
    }
`

export default function PersonalPages() {
    return (
        <Documents id="personalPages">
            <Page className="rotateLeft">
                <Controls>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>me.json</div>
                </Controls>

                <TextPage>
                    <pre >
                        <code>
                            {JSON.stringify(
                                {
                                    name: "Makene Neto",
                                    title: "Full Stack Developer",
                                    description:
                                        "Full stack developer with ...",
                                    urlToImage: "https://avatars.githubusercontent...",
                                    email: "makeneto17@gmail.com",
                                    education: [
                                        {
                                            institution: "CEPNSA",
                                            course: "Computer Technician",
                                            period: "2021 - 2025",
                                            description: "I learned full stack developm...",
                                        },
                                    ],
                                    languages: {
                                        Portuguese: "Fluent",
                                        English: "Intermediary",
                                    },
                                    "skills": {
                                        "frontend": [
                                            "HTML",
                                            "CSS",
                                            "SCSS",
                                            "JavaScript",
                                            "TypeScript",
                                            "React",
                                            "Next.js",
                                            "Redux",
                                            "TailwindCSS"
                                        ],
                                        "backend": [
                                            "Node.js",
                                            "Express",
                                            "Supabase",
                                            "MongoDB",
                                            "Firebase",
                                            "PostgreSQL"
                                        ],
                                        "tools": [
                                            "Git",
                                            "GitHub",
                                            "Figma",
                                            "Vercel",
                                            "Postman",
                                            "Docker",
                                            "ESLint",
                                            "Prettier"
                                        ],
                                        "soft_skills": [
                                            "Problem solving",
                                            "Teamwork",
                                            "Self -Daidatism",
                                            "Communication",
                                            "Critical thinking"
                                        ],
                                        "other": [
                                            "UI/UX Design",
                                            "Automated tests",
                                            "Agile Methodologies",
                                            "CI/CD",
                                            "Software Architecture"
                                        ]
                                    }
                                },
                                null,
                                2
                            )}
                        </code>
                    </pre>
                </TextPage>
            </Page>

            <BiArrowFromLeft />

            <Page className="rotateRight">
                <Controls>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>presentation.jpeg</div>
                </Controls>

                <TextPage>
                    <h3>Brief presentation</h3>
                    <p><span>Makene Neto:</span> Full Stack Developer</p>
                    <p>Full stack developer with experience in creating functional and well-designed digital solutions.</p>

                    <Lists>
                        <ul>
                            <h3>Languages</h3>
                            <li className="strong">Portuguese - Fluent</li>
                            <li>English - Intermediate</li>
                        </ul>

                        <ul>
                            <h3>Education</h3>
                            <li className="strong"><strong>College Nossa Senhora da Anunciação</strong></li>
                            <li>Computer Technician (2021 - 2025)</li>
                            <li>I learned full stack development through online courses, personal projects, and contributions to startups.</li>
                        </ul>
                    </Lists>

                    <h2>Skills</h2>

                    <Skills>
                        <ul>
                            <h3>Front-end</h3>
                            <li>HTML & (S)CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Styled-components</li>
                            <li>Next.js</li>
                            <li>Redux</li>
                            <li>TailwindCSS</li>
                        </ul>

                        <ul>
                            <h3>Back-end</h3>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Supabase</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </Skills>
                </TextPage>
            </Page>
        </Documents>
    )
}

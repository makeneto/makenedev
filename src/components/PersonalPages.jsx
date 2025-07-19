import { BiArrowFromLeft } from "react-icons/bi";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Documents = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 91%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
    align-items: center;

    & svg {
        font-size: 1.5rem;
        color: white;
    }

    @media (max-width: 1280px) {
        top: 107%;
    }

    @media (max-width: 884px) {
        display: none;
    }
`;

const Page = styled(motion.div)`
    background-color: var(--dark-blue-v2);
    text-align: start;
    border-radius: 0.5rem;
    width: 28rem;
    height: 42rem;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease-in-out;

    @media (max-width: 1280px) {
        height: 40rem;
    }
`;

const Controls = styled.div`
    background-color: var(--dark-blue-v2);
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
`;

const TextPage = styled.div`
    margin-top: 1rem;
    color: white;
    background-color: var(--dark-blue-v2) ;
    overflow: hidden;
    padding: 0.3rem 2rem 1rem;
    font-weight: 400;
    height: 100%;

    & h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    & h2 {
        margin-top: 1.6rem;
        font-weight: 600;
        font-size: 1.3rem;
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

    & h1 {
        font-weight: 500;
        font-size: 1rem;
    }

    & li {
        color: #AFB7B4;
        font-weight: 400;
    }
`

const Lists = styled.div`
    margin-top: 1.5rem;
    display: grid;
    gap: 1rem;

    & h1 {  
        font-weight: 500;
        font-size: 1rem;
        margin-bottom: 0 !important;
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
    const controls = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) {
            controls.start({ rotate: 0 })
        }
    }, [inView, controls])

    return (
        <Documents id="personalPages" ref={ref}>
            <Page
                className="rotateLeft"
                animate={controls}
                initial={{ rotate: -6 }}
                transition={{ duration: 0.5 }}
            >
                <Controls>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>me.json</div>
                </Controls>

                <TextPage>
                    <pre>
                        <code>
                            {JSON.stringify(
                                {
                                    name: "Makene Neto",
                                    title: "Front End Developer",
                                    description:
                                        "Front End developer with ...",
                                    urlToImage: "https://avatars.githubusercontent...",
                                    email: "makenedev@gmail.com",
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
                                            "React Native",
                                            "TypeScript",
                                            "React",
                                            "Redux",
                                            "HTML & (S)CSS",
                                            "JavaScript",
                                            "Styled-components",
                                            "Next.js",
                                            "TailwindCSS"
                                        ],
                                        "backend": [
                                            "Node.js",
                                            "Express",
                                            "Supabase",
                                        ],
                                        "tools": [
                                            "Git",
                                            "GitHub",
                                            "Figma",
                                            "Vercel",
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

            <Page
                className="rotateRight"
                animate={controls}
                initial={{ rotate: 6 }}
                transition={{ duration: 0.5 }}
            >
                <Controls>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>presentation.jpeg</div>
                </Controls>

                <TextPage>
                    <h1>Brief Presentation</h1>
                    <p><span>Makene Neto:</span> Front End Developer</p>
                    <p>Front End developer with experience in creating functional and well-designed digital solutions.</p>

                    <Lists>
                        <h1>Languages</h1>
                        <ul>
                            <li className="strong">Portuguese - Fluent</li>
                            <li>English - Intermediate (B2)</li>
                        </ul>

                        <h1>Education</h1>
                        <ul>
                            <li className="strong"><strong>College Nossa Senhora da Anunciação</strong></li>
                            <li>Computer Technician (2021 - 2024)</li>
                            <li>I learned front end development through online courses, personal projects, and more.</li>
                        </ul>
                    </Lists>

                    <h2>Skills</h2>

                    <Skills>
                        <div>
                            <h1>Front-end</h1>
                            <ul>
                                <li>React Native</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>HTML & (S)CSS</li>
                                <li>JavaScript</li>
                                <li>Styled-components</li>
                                <li>Next.js</li>
                                <li>TailwindCSS</li>
                            </ul>
                        </div>

                        <div>
                            <h1>Back-end</h1>
                            <ul>
                                <li>Node.js</li>
                                <li>Supabase</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                    </Skills>
                </TextPage>
            </Page>
        </Documents >
    )
}

import styled from 'styled-components'
import { experiences } from '../data/experiences'
import { SmallTech, StyledSmallTechs } from './ProjectsTable'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaThreads } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Works = styled.section`
    margin: 9rem 15rem 11rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 480px) {
        margin: 0 1rem 3rem !important;
        display: grid;
        gap: 3.5rem;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        display: grid;
        gap: 7rem;
    }

    @media (max-width: 1280px) {
        margin: 9rem 3rem 11rem;
    }
`

const Header = styled.header`
    position: sticky;
    top: 3%;
    width: 33%;

    & h1 {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: .6rem;

        @media (max-width: 480px) {
            font-size: 2rem !important;
            margin-bottom: .4rem;
        }

        @media (max-width: 1280px) {
            font-size: 2.8rem;
            margin-bottom: .2rem;
        }
    }

    & p {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 1rem;

        @media (max-width: 480px) {
            font-size: 1rem !important;
            margin-bottom: .8rem;	
        }

        @media (min-width: 481px) and (max-width: 884px) {
            font-size: 1.3rem !important;	
        }

        @media (max-width: 1280px) {
            font-size: 1.1rem;
        }
    }

    & div {
        display: flex;
        gap: 1.5rem;
        margin-top: 1.7rem;

        & a {
            color: var(--light-grey);
            font-size: 1.3rem;
            transition: color 0.3s ease;

            &:hover {
                color: white;
            }

            & svg {
                width: 1.6rem;
                height: 1.6rem;

                @media (min-width: 481px) and (max-width: 884px) {
                    width: 1.7rem !important;
                    height: 1.7rem !important;
                }

                @media (max-width: 1280px) {
                    width: 1.4rem;
                    height: 1.4rem;
                }
            }
        }

        @media (max-width: 480px) {
            margin-top: 1.5rem;
        }

        @media (min-width: 481px) and (max-width: 884px) {
            margin-top: 1.9rem;
        }
    }

    @media (max-width: 480px) {
        width: 100% !important;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        width: 65% !important;
    }

    @media (max-width: 1280px) {
        width: 36%;
        top: 3.5%;
    }
`

const Description = styled.p`
    font-size: 1.1rem;
    color: var(--light-grey);
    font-weight: normal !important;

    @media (max-width: 1280px) {
        font-size: 1rem !important;
    }
`

const ExperiencesList = styled.ul`
    width: 50%;
    display: grid;
    row-gap: 3.7rem;

    & li {
        display: flex;
        gap: 4rem;

        & div:first-child {
            width: 25%;

            @media (max-width: 480px) {
                width: 100%;
            }
        }

        & div:last-child {
            width: 70%;
            display: grid;
            row-gap: 0.9rem;

            @media (max-width: 480px) {
                width: 100%;
            }

            @media (min-width: 481px) and (max-width: 884px) {
                row-gap: 0.9rem;
            }

            @media (max-width: 1280px) {
                row-gap: 0.7rem;
            }
        }

        & h2 {
            font-size: 1.3rem;
            font-weight: 500;
            color: white;
            margin-bottom: 0.3rem;

            @media (max-width: 1280px) {
                font-size: 1.1rem;
                margin-bottom: 0;
            }
        }

        & p {
            color: var(--light-grey);
            font-size: 1.1rem;

            @media (max-width: 480px) {
                margin-bottom: 0 !important;
            }

            @media (min-width: 481px) and (max-width: 884px) {
                font-size: 1.2rem !important;
            }

            @media (max-width: 1280px) {
                font-size: 1rem;
                margin-bottom: .5rem;
            }
        }

        @media (max-width: 480px) {
            display: grid;
            gap: .5rem !important;
        }

        @media (max-width: 1280px) {
            gap: 1rem;
        }

        @media (max-width: 1281px) and (max-width: 1919px){
            row-gap: 3rem;
        }
    }

    @media (max-width: 480px) {
        width: 100% !important;
        row-gap: 3.5rem;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        width: 100% !important;
    }

    @media (max-width: 1280px) {
        width: 47%;
    }

    @media (max-width: 1281px) and (max-width: 1919px){
        width: 50%;
    }
`

export default function Experiences() {
    return (
        <Works>
            <Header>
                <h1>Makene Neto</h1>
                <p>Front End Engineer</p>
                <Description>Passionate Front-End Engineer with 4 years of experience in building responsive, user-friendly web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and React Native. Strong ability to translate UI/UX designs into high-quality code, and a keen eye for performance optimization and scalability. Experienced withcross-browser testing, debugging, and Agile workflows.</Description>

                <div>
                    <Link to="https://www.instagram.com/makenedev" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </Link>
                    <Link to="https://www.threads.net/@makenedev" target="_blank" aria-label="Threads">
                        <FaThreads />
                    </Link>
                    <Link to="https://www.facebook.com/N.Makeny" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </Link>
                    <Link to="https://www.linkedin.com/in/makene-neto" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </Link>
                </div>
            </Header>

            <ExperiencesList>
                {experiences.map((experience, index) => (
                    <li key={index}>
                        <div>
                            <p>{experience.duration}</p>
                        </div>

                        <div>
                            <h2>{experience.position} • {experience.company}</h2>
                            <p>{experience.description}</p>

                            <StyledSmallTechs>
                                {experience.techs.map((tech) => (
                                    <SmallTech key={tech}>{tech}</SmallTech>
                                ))}
                            </StyledSmallTechs>
                        </div>
                    </li>
                ))}
            </ExperiencesList>
        </Works>
    )
}

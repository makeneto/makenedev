import { HiOutlineArrowRight } from "react-icons/hi2"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

import { LargeTitle } from "./FAQ"
import { DescriptionTitle } from "./FavoriteSingers"
import MobileCarousel from "./ui/MobileCarousel"
import { mobileProjects } from "../data/mobileProjects"
import { useMediaQuery } from "react-responsive"

const ProjectsStyled = styled.section`
    width: 100%;
    margin: 4rem auto 8rem;
    gap: 2rem;

    @media (max-width: 1280px) {
        margin: 6rem auto 9rem;
    }

    @media (max-width: 480px) {
        margin: 0 auto 7rem;
    }
`

const ProjectsContainer = styled.ul`
    width: 80%;
    margin: 3.5rem auto 15rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    
    @media (max-width: 1281px) and (max-width: 1919px){
        width: 90%;
        margin: 3.5rem auto 11rem;
    }

    @media (min-width: 885px) and (max-width: 1280px) {
        width: 95%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.4rem;
    }

    @media (max-width: 480px) {
        width: 92%;
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
        margin-bottom: 5rem;
    }
`

const FullList = styled.li`
    margin-top: -9.2%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & a {
        font-size: 1.2rem;
        color: white;
        display: flex;
        align-items: center;
        gap: .3rem;
        text-decoration: none;
        font-weight: 400;
        transition: all .2s ease-in;
        
        &:hover {
            gap: .5rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
        }

        @media (min-width: 481px) and (max-width: 768px) {
            font-size: 1.2rem;
        }

        @media (min-width: 769px) and (max-width: 1024px) {
            font-size: 1rem;
        }
    }

    @media (min-width: 481px) and (max-width: 768px) {
        margin-top: -7rem;
    }
`

export default function LastProjects() {
    const navigate = useNavigate()
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <ProjectsStyled id="projects">
            <section>
                <LargeTitle>Latest Projects</LargeTitle>
                <DescriptionTitle>
                    Innovative solutions developed with a focus on performance, usability and cutting-edge technology.
                </DescriptionTitle>
            </section>

            <ProjectsContainer>
                {mobileProjects.slice(0, isMobile ? 2 : 3).map(project => (
                    <MobileCarousel key={project.id} project={project} />
                ))}
            </ProjectsContainer>

            <FullList>
                <Link
                    onClick={() => {
                        if (location.pathname !== "/projects") {
                            navigate("/projects", { replace: true })
                            setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 50)
                        } else {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    }}
                    to="/projects"
                    smooth
                    duration={500}
                    offset={0}
                    spy
                    aria-label="All Projects"
                    className="link"
                >
                    Full List
                    <HiOutlineArrowRight />
                </Link>
            </FullList>
        </ProjectsStyled>
    )
}

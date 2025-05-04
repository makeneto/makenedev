import { HiOutlineArrowRight } from "react-icons/hi2"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"

import { LargeTitle } from "./FAQ"
import { DescriptionTitle } from "./FavoriteSingers"
import { gitProjects } from "../api/fetchProjects"
import Project from "./ui/Project"

const ProjectsStyled = styled.section`
    width: 100%;
    margin: 4rem auto 8rem;
    gap: 2rem;

    @media (max-width: 1280px) {
        margin: 4rem auto 9rem;
    }

    @media (max-width: 480px) {
        margin: 0 auto 8rem;
    }
`

const ProjectsContainer = styled.ul`
    width: 80%;
    margin: 3.5rem auto 15rem;
    display: grid;
    grid-template-columns: 42% 42% 16%;
    gap: 2rem;

    @media (max-width: 1919px){
        width: 90%;
        margin: 3.5rem auto 11rem;
    }

    @media (max-width: 1280px) {
        width: 95%;
    }

    @media (max-width: 884px) {
        grid-template-columns: 39% 39% 21%;
        gap: 1.4rem;
    }

    @media (max-width: 480px) {
        width: 92%;
        grid-template-columns: repeat(1, 1fr);
        gap: 4rem;
        margin-bottom: 5rem;
    }
`

const FullList = styled.li`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 4rem;
    
    & a {
        color: white;
        display: flex;
        align-items: center;
        gap: .3rem;
        text-decoration: none;
        font-size: .9rem;
        font-weight: 400;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 480px) {
        align-items: flex-start;
        justify-content: flex-start;
        padding-right: 2rem;
    }
`

export default function LastProjects() {
    const { data, isPending } = useQuery({
        queryKey: ["projects"],
        queryFn: gitProjects,
    })

    if (isPending || !data?.length) return

    return (
        <ProjectsStyled id="projects">
            <section>
                <LargeTitle>Latest Projects</LargeTitle>
                <DescriptionTitle>
                    Innovative solutions developed with a focus on performance, usability and cutting-edge technology.
                </DescriptionTitle>
            </section>

            <ProjectsContainer>
                {data?.length && (
                    data.map((project) => (
                        <Project key={project.id} projectObj={project} />
                    ))
                )}

                <FullList>
                    <Link
                        to='https://github.com/makeneto?tab=repositories'
                        target="_blank"
                        aria-label="GitHub Projects"
                        className="link"
                    >
                        Full List
                        <HiOutlineArrowRight />
                    </Link>
                </FullList>
            </ProjectsContainer>
        </ProjectsStyled>
    )
}

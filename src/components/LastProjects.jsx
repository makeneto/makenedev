import styled from "styled-components"
import { LargeTitle } from "./FAQ"
import { DescriptionTitle } from "./FavoriteSingers"
import { gitProjects } from "../api/fetchProjects"
import { useQuery } from "@tanstack/react-query"
import Project from "./ui/Project"
import { HiOutlineArrowRight } from "react-icons/hi2"
import { Link } from "react-router-dom"

const ProjectsStyled = styled.section`
    width: 100%;
    margin: 4rem auto 8rem;
    gap: 2rem;

    @media (max-width: 480px) {
        margin: 0 auto 8rem;
    }
`

const ProjectsContainer = styled.ul`
    width: 95%;
    margin: 3.5rem auto 0;
    display: grid;
    grid-template-columns: 42% 42% 16%;
    gap: 1rem;

    & div {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 2rem;
        
        & a {
            color: var(--dark-grey);
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
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 4rem;
    }
`

export default function LastProjects() {
    const { data, isPending } = useQuery({
        queryKey: ["projects"],
        queryFn: gitProjects,
    })

    if (isPending || !data?.length) return

    return (
        <ProjectsStyled>
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

                <div>
                    <Link to='https://github.com/makeneto?tab=repositories' target="_blank">
                        Full List
                        <HiOutlineArrowRight />
                    </Link>
                </div>
            </ProjectsContainer>

        </ProjectsStyled>
    )
}

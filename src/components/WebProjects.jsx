import styled from "styled-components";
import { getYear } from "../helpers/getYear";
import { ExternalLink } from "lucide-react";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { webProjects } from "../data/webProjects";

const Table = styled.table`
    margin-top: 1rem;
    width: 100%;
    text-align: left;

    & tbody tr:not(:last-child) td {
        border-bottom: var(--light-border);
    }

    & th {
        font-weight: 500;
    }

    & th, & td {
        padding-block: 16px;
        vertical-align: top;
    }

    & td {
        color: var(--light-grey);
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        margin-top: 2rem;
    }

    @media (max-width: 1919px){
        margin-top: 2rem;
    }
`

const Year = styled.th`
    width: 6%;

    @media (max-width: 480px) {
        width: 3% !important;
    }

    @media (max-width: 1280px) {
        width: 7%;
    }
`
const Title = styled.th`
    width: 18%;

    @media (max-width: 480px) {
        width: 80%;
    }

    @media (max-width: 1280px) {
        width: 18%;
    }
`

const Duration = styled.th`
    width: 12%;

    @media (max-width: 1280px) {
        width: 12%;
    }
`

const Techs = styled.th`
    width: 100% !important;
    
    @media (max-width: 1280px) {
        width: 54% !important;
    }
    
    @media (max-width: 1919px){
        width: 42%;
    }
`

const Link = styled.th`
    width: 35%;

    @media (max-width: 1280px) {
        width: 9%;
    }
`

const TitleProject = styled.td`
    font-weight: 500;
    color: white !important;
`

const TitleLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 16px 0 19px;

    & svg {
        width: .9rem;
    }
`

export const StyledSmallTechs = styled.td`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`

export const SmallTech = styled.span`
    font-size: 0.78rem;
    color: var(--light-blue);
    font-weight: 500;
    background-color: var(--weak-blue);
    padding: 0.2rem .7rem;
    border-radius: 1rem;
    gap: 5rem;

    user-select: none;
`

const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    transition: color 0.2s ease-in-out;

    & svg {
        width: .8rem;
    }

    &:hover {
        color: white;
    }
`

export default function WebProjects() {
    const isMobile = useMediaQuery({ maxWidth: 480 })
    const isTablet = useMediaQuery({ maxWidth: 884 });

    return (
        <Table>
            <thead>
                <tr>
                    <Year>Year</Year>
                    <Title>Title</Title>
                    {(!isMobile && !isTablet) && <Duration>Duration</Duration>}
                    {!isMobile && <Techs>Techs</Techs>}
                    {!isMobile && <Link>Link</Link>}
                </tr>
            </thead>

            <tbody>
                {webProjects.map((project, index) => (
                    <tr key={index}>
                        <td>{getYear(project.date)}</td>
                        {!isMobile && <TitleProject>{project.title}</TitleProject>}

                        {isMobile && (
                            <TitleLink
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    borderBottom:
                                        index !== webProjects.length - 1
                                            ? "var(--light-border)"
                                            : "none"
                                }}
                            >
                                {project.title}

                                {project.link.endsWith("vercel.app") ? (
                                    <IoLogoVercel />
                                ) : project.link.replace(/^https?:\/\//, "").startsWith("github.com") ? (
                                    <FaGithub />
                                ) : (
                                    <ExternalLink />
                                )}
                            </TitleLink>
                        )}

                        {(!isMobile && !isTablet) && <td>{project.duration}</td>}
                        {!isMobile && (
                            <StyledSmallTechs>
                                {project.techs.map((tech) => (
                                    <SmallTech key={tech}>{tech}</SmallTech>
                                ))}
                            </StyledSmallTechs>
                        )}

                        {!isMobile && (
                            <td>
                                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.link.endsWith("vercel.app")
                                        ? "Vercel"
                                        : project.link.replace(/^https?:\/\//, "").startsWith("github.com")
                                            ? "Github"
                                            : project.link.replace(/^https?:\/\//, "").split("/")[0]}

                                    {project.link.endsWith("vercel.app") ? (
                                        <IoLogoVercel />
                                    ) : project.link.replace(/^https?:\/\//, "").startsWith("github.com") ? (
                                        <FaGithub />
                                    ) : (
                                        <ExternalLink />
                                    )}
                                </ProjectLink>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

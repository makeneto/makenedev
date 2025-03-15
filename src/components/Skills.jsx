import styled from "styled-components"
import { UseUserContext } from "../context/UserContext"
import { skills } from "../data/skillsData"
import Skill from "./ui/Skill"
import { useEffect } from "react"
import { Overlay } from "./ui/Overlay"

const SkillStyled = styled.article`
    z-index: 888;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: var(--dark-blue-v2);
    width: 80%;
    max-height: 70dvh;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 2.2rem 3rem;
    font-weight: 400;
    color: white;
    border-radius: .6rem;
    transition: all .2s ease-in-out;

    opacity: ${({ show }) => show ? '1' : '0'};
    visibility: ${({ show }) => show ? 'visible' : 'hidden'};

    &::-webkit-scrollbar { 
        display: none;
    }

    & a:hover {
        text-decoration: underline;
    }

    & span {
        position: fixed;

        & svg {
            position: fixed;
            right: 3%;
            top: -3%;
        }
    }

    @media (max-width: 1280px) {
        max-height: 66dvh;
    }

    @media (max-width: 884px) {
        width: 94%;
        max-height: 72dvh;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        width: 92%;
        padding: 1rem;
    }
`

const SkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    list-style: none;

    @media (max-width: 884px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
    }
`

export default function Skills() {
    const { showSkills } = UseUserContext()

    useEffect(() => {
        if (showSkills) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = ""
        }
    }, [showSkills])

    return (
        <>
            <Overlay show={showSkills} />
            <SkillStyled show={showSkills}>
                <SkillsContainer>
                    {skills.map((skill) => (
                        <Skill key={skill.title} skillObj={skill} />
                    ))}
                </SkillsContainer>
            </SkillStyled>
        </>
    )
}

import styled from "styled-components"
import { skills } from "../data/skillsData"
import Skill from "./ui/Skill"
import { Overlay } from "./ui/Overlay"

import {
    DndContext,
    closestCenter,
} from '@dnd-kit/core'
import {
    SortableContext,
    arrayMove,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import useSkills from "../hooks/useSkills"

const SkillStyled = styled.article`
    z-index: 888;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: var(--dark-blue-v2);
    width: 50%;
    max-height: 70dvh;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 2.2rem 2.2rem;
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

    @media (max-width: 1919px){
        width: 67%;
    }

    @media (max-width: 1280px) {
        width: 80%;
        max-height: 66dvh;
    }

    @media (max-width: 884px) {
        width: 94%;
        max-height: 72dvh;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        top: 48%;
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

function SortableSkill({ skill }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: skill.title })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Skill key={skill.title} skillObj={skill} />
        </li>
    )
}

export default function Skills() {
    const { showSkills, items, setItems, sensors } = useSkills()

    return (
        <>
            <Overlay show={showSkills} />
            <SkillStyled show={showSkills ? "true" : undefined}>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={({ active, over }) => {
                        if (active.id !== over.id) {
                            setItems((prevItems) => {
                                const oldIndex = prevItems.indexOf(active.id)
                                const newIndex = prevItems.indexOf(over.id)
                                return arrayMove(prevItems, oldIndex, newIndex)
                            })
                        }
                    }}
                >
                    <SortableContext items={items} strategy={verticalListSortingStrategy}>
                        <SkillsContainer>
                            {items.map((id) => {
                                const skill = skills.find(s => s.title === id)
                                return <SortableSkill key={id} skill={skill} />
                            })}
                        </SkillsContainer>
                    </SortableContext>
                </DndContext>
            </SkillStyled>
        </>
    )
}

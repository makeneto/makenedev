import styled from "styled-components"

const SkillStyled = styled.li`
    cursor: pointer;
    user-select: none;
    background-color: var(--weak-blue);
    padding: 1rem;
    border-radius: .5rem;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all .2s ease-out;

    & img {
        width: 3rem;
    }

    & div {
        & h3 {
            font-weight: 600;
            font-size: 1rem;
        }

        & p {
            font-size: .8rem;
        }
    }
`

export default function Skill({ skillObj }) {
    const { logo, title, level, main } = skillObj

    return (
        <SkillStyled mainTech={main}>

            <img
                src={logo}
                alt={title}
                lazy="loading"
                onContextMenu={(e) => e.preventDefault()} />
            <div>
                <h3 translate="no">{title}</h3>
                <p>{level}</p>
            </div>
        </SkillStyled>
    )
}

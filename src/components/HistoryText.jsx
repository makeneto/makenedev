import styled from "styled-components"

const AnimatedText = styled.h1`
    font-size: 4.6rem;
    font-weight: bolder;
    line-height: 1.4;
    white-space: pre-line;
    margin-inline: 7rem;
    word-spacing: .3rem;
    margin: 10rem 10rem 14rem;

    @media (max-width: 1281px) and (max-width: 1919px){
        font-size: 3.4rem;
        line-height: 1.5;
        margin-inline: 4rem;
    }

    @media (min-width: 885px) and (max-width: 1280px) {
        font-size: 2.7rem;
        line-height: 1.5;
        margin: 7rem 3rem 10rem;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        font-size: 2.2rem;
        word-spacing: .1rem;
        margin: 0 3rem 0;
    }

    @media (max-width: 480px) {
        font-size: 1.7rem;
        margin: 6rem 1rem 5rem;
    }
`

const Line = styled.h1`
    display: block;
    transition: opacity 1s ease-in-out;
`

export default function HistoryText() {
    return (
        <AnimatedText id="history-text">
            <Line>
                Since I was a child, I have always fell in love with technology, but it was in programming that I discovered my purpose. The encouragement of my family, I learned alone, creating projects like <span translate="no"> landing pages </span> and a platform for a gym. Then, as a full stack developer, I still evolve, facing challenges and exploring new technologies to create impactful solutions.
            </Line>
        </AnimatedText>
    )
}

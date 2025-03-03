import moment from "moment"
import { useCallback } from "react"
import { HiOutlineArrowDown } from "react-icons/hi"
import confetti from "canvas-confetti"
import styled from "styled-components"
import { Link as ScrollLink } from 'react-scroll'

const HeaderStyled = styled.header`
    height: 123dvh;
    padding: 4rem;
    text-align: center;
    position: relative;
    background: rgb(131,224,106);
    background: linear-gradient(332deg, rgba(131,224,106,1) 0%, rgba(255,255,255,1) 57%, rgba(230,230,230,1) 100%);
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        filter: blur(23rem);
        backdrop-filter: blur(10px);
        z-index: -1;
    }

    @media (max-width: 1280px) {
        height: 193dvh;
    }

    @media (max-width: 480px) {
        background: linear-gradient(332deg, rgba(131,224,106,1) 0%, rgba(255,255,255,1) 37%, rgba(230,230,230,1) 100%);
        height: 75dvh;
        padding: 0;
    }
`;

const Content = styled.div`
    color: var(--light-grey);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    & h1 {
        margin: 2.3rem 0 1rem;
        font-size: 4.2rem;
        font-weight: 900;
        line-height: 5.8rem;

        & span {
            color: var(--dark-green);
        }

        
        @media (max-width: 1280px) {
            font-size: 3rem;
            line-height: 3.8rem;
        }

        @media (max-width: 480px) {
            font-size: 2rem;
            line-height: 2.5rem;
        }
    }

    & p {
        font-size: 1.7rem;
        font-weight: 500;

        
        @media (max-width: 480px) {
            font-size: 1.2rem;
            font-weight: 400;
        }
    }

    @media (max-width: 1280px) {
        width: 60%;
        top: 23%;        
    }

    @media (max-width: 480px) {
        width: 90%;
        top: 42%;
    }
`

const Career = styled.span`
    border: 1px solid var(--light-grey);
    border-radius: 10rem;
    padding: 0.7rem 0.9rem;
    font-weight: 400;
    color: black;
    cursor: pointer;

    @media (max-width: 480px) {
        padding: 0.5rem .9rem;
    }
`

const Button = styled(ScrollLink)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--green-color);
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 400;
    color: black;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: all .2s ease-in;
    
    &:hover {
        filter: brightness(95%);
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.12);
    }

    &:active {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
    }   

    @media (max-width: 480px) {
        width: 59%;
        font-size: 1rem;
        text-align: center;
        justify-content: center;
    }
`

export default function Header() {
    const startDate = moment('2020-07-25')
    const now = moment()
    const currentCareerYears = now.diff(startDate, 'years')

    const handleConfetti = useCallback(() => {
        confetti({
            particleCount: 350,
            spread: 150,
            origin: { y: 0.6 },
        })
    }, [])

    return (
        <HeaderStyled>
            <Content>
                <Career onClick={handleConfetti} >🎉 {currentCareerYears} years in programming</Career>

                <h1><span>Boosting </span>growth with smart and <span>efficient solutions</span></h1>
                <p>Driving the growth with agile and smart solutions</p>

                <Button to="techs">
                    Explore more
                    <HiOutlineArrowDown />
                </Button>
            </Content>
        </HeaderStyled>
    )
}
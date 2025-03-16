import moment from "moment"
import { Link as ScrollLink } from 'react-scroll'
import { useMediaQuery } from "react-responsive"
import { FaChevronDown } from "react-icons/fa"
import styled from "styled-components"

import { useScrollToSection } from "../helpers/scrollToSection"
import { handleConfetti } from "../helpers/confetti"

const HeaderStyled = styled.header`
    height: 123dvh;
    padding: 4rem;
    text-align: center;
    position: relative;
    margin: 0 0 14rem;

    @media (max-width: 1280px) {
        height: 193dvh;
    }

    @media (max-width: 884px) {
        height: 65dvh;
    }   

    @media (max-width: 480px) {
        height: 92dvh;
        margin-bottom: -3rem;
        padding: 0;
    }
`;

const Content = styled.div`
    color: var(--light-grey);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    & img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin-inline: auto;
        object-fit: cover;
        margin-bottom: 1.4rem;

        @media (max-width: 884px) {
            width: 14rem;
            height: 14rem;
            margin-bottom: 2rem;
        }

        @media (max-width: 480px) {
            width: 10rem;
            height: 10rem;
            margin-bottom: 1.6rem;
        }
    }

    & h1 {
        margin: 1rem 0 1rem;
        font-size: 4.2rem;
        font-weight: 900;
        line-height: 5.8rem;

        & span {
            color: white;
        }

        
        @media (max-width: 1280px) {
            font-size: 3rem;
            line-height: 3.9rem;
        }

        @media (max-width: 884px) {
            font-size: 3rem;
            line-height: 3.7rem;
        }

        @media (max-width: 480px) {
            font-size: 1.6rem;
            line-height: 2.5rem;
            margin: .7rem 0 .4rem;
        }
    }

    & p {
        font-size: 1.7rem;
        font-weight: 500;

        @media (max-width: 1280px) {
            font-size: 1.2rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
            font-weight: 400;
        }
    }

    @media (max-width: 1280px) {
        width: 60%;
        top: 23%;        
    }

    @media (max-width: 884px) {
        width: 80%;
        top: 65%;
    }

    @media (max-width: 480px) {
        width: 90%;
        top: 42%;
    }
`

const Career = styled.span`
    border: var(--light-border);
    border-radius: 10rem;
    padding: 0.4rem 0.7rem;
    font-size: .8rem;
    font-weight: 400;
    color: white;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: rgba(99, 161, 242, 0.09);
    }

    @media (max-width: 884px) {
        padding: 0.7rem 1rem;
        font-weight: 400;
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        padding: 0.3rem .5rem;
        font-size: .8rem;
    }
`

const Button = styled(ScrollLink)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    color: white;
    border: none;
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
    
    @media (max-width: 1280px) {
        font-size: 1rem;
    }

    @media (max-width: 884px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        margin: 2.6rem 0 0;
        font-size: 1rem;
    }
`

export default function Header() {
    const startDate = moment('2020-07-25')
    const now = moment()
    const currentCareerYears = now.diff(startDate, 'years')
    const isMobile = useMediaQuery({ maxWidth: 884 })
    // const isPhone = useMediaQuery({ maxWidth: 480 })
    const scrollToSection = useScrollToSection()

    return (
        <HeaderStyled>
            <Content>
                <img src="/images/profile.jpg" alt="Makene's Profile" loading="lazy" />

                <Career onClick={handleConfetti}>🎉 {currentCareerYears} years in programming</Career>

                <h1><span>Boosting </span>growth with smart and <span>efficient solutions</span></h1>
                <p>Driving the growth with agile and smart solutions</p>

                <Button
                    onClick={() => scrollToSection(isMobile ? "graphs" : "personalPages")}
                    to={isMobile ? "graphs" : "personalPages"}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    spy={true}
                >
                    <FaChevronDown />
                </Button>
            </Content>
        </HeaderStyled>
    )
}

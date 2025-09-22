import { Link as ScrollLink } from 'react-scroll'
import { FaChevronDown } from "react-icons/fa"
import styled from "styled-components"

import { handleConfetti } from "../helpers/confetti"
import useHeader from "../hooks/useHeader"

const HeaderStyled = styled.header`
    background: 
        linear-gradient(to bottom, rgba(0,0,0,0) 50%, #0E1821 100%),
        url('/assets/hero-bg.webp') center center;
    background-size: cover;
    height: 129dvh;
    padding: 4rem;
    text-align: center;
    position: relative;
    margin: 0 0 30rem;
    
    @media (max-width: 1280px) {
        height: 193dvh;
        margin: 0 0 12rem;
    }

    @media (max-width: 884px) {
        height: 65dvh;
    }   

    @media (max-width: 480px) {
        height: 100dvh;
        margin-bottom: 0rem;
        padding: 0;
    }
`;

const Content = styled.div`
    color: var(--light-grey);
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);

    & img {
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        margin-inline: auto;
        object-fit: cover;
        margin-bottom: 3rem;

        @media (max-width: 1919px){
            width: 10rem;
            height: 10rem;
        }

        @media (max-width: 1280px) {
            width: 10rem;
            height: 10rem;
            margin-bottom: 1.4rem;
        }

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

        @media (max-height: 600px) {
            width: 9rem;
            height: 9rem;
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

        @media (max-width: 1919px){
            font-size: 3.2rem;
            line-height: 4.4rem;
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
            line-height: 2.2rem;
            margin: .7rem 0 .5rem;
        }

        @media (max-height: 600px) {
            font-size: 2.2rem;
            line-height: 2.6rem;
        }
    }

    & p {
        font-size: 1.7rem;
        font-weight: 500;

        @media (max-width: 1919px){
            font-size: 1.3rem;
        }

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
        top: 24.4%;     
    }

    @media (max-width: 884px) {
        width: 80%;
        top: 65%;
    }

    @media (max-width: 480px) {
        width: 90%;
        top: 45%;
    }
`

const Career = styled.span`
    border: var(--light-border);
    border-radius: 10rem;
    padding: .4rem .7rem;
    font-size: 1rem;
    font-weight: 400;
    color: white;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: rgba(99, 161, 242, 0.09);
    }

    @media (max-width: 1919px){
        font-size: .8rem;
    }

    @media (max-width: 1280px) {
        font-size: .8rem;
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

const Button = styled.span`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    color: white;
    border: none;
    margin-top: 2rem;
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
    const { currentCareerYears } = useHeader()

    return (
        <HeaderStyled>
            <Content>
                <img
                    src="/assets/profile.webp"
                    alt="Makene's Profile"
                    loading="lazy"
                    onContextMenu={(e) => e.preventDefault()}
                />

                <Career onClick={handleConfetti}>🎉 {currentCareerYears} years in programming</Career>

                <h1><span>Boosting </span>growth with smart and <span>efficient solutions</span></h1>
                <p>Driving the growth with agile and smart solutions</p>

                <Button>
                    <FaChevronDown />
                </Button>
            </Content>
        </HeaderStyled>
    );
}
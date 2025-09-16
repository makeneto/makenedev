import moment from "moment"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components"
import { FaThreads } from "react-icons/fa6";

import { Logo } from "./NavBar"
import { Link } from "react-router-dom";

const FooterStyled = styled.footer`
    background-color: #181d22;
    height: 24.8rem;
    position: relative;

    & div:first-child {
        background-color: var(--dark-blue);
        height: 3rem;
        border-radius: 0 0 58rem 58rem;

        @media (max-width: 480px) {
            border-radius: 0 0 2em 2rem;
        }
    }

    @media (max-width: 884px) {
        height: 24rem;
        margin: 2rem auto 0;
    }

    @media (max-width: 480px) {
        height: 23rem;
    }

    & div:last-child {
        width: 70%;
        margin: 4rem auto 0;
        
        display: grid;
        gap: 1rem;
        text-align: center;

        @media (max-width: 480px) {
            width: 100%;
            gap: .6rem;
        }

        & p {
            &:first-child {
                font-size: 1.4rem;
                
                @media (max-width: 480px) {
                    font-size: 1.2rem;
                }
            }

            &:nth-child(2) {
                font-size: .9rem;
                color: var(--light-grey) !important;
            }
        }

        & div {
            display: grid;
            gap: 0;
            margin-top: 0.5rem;
            text-align: center;

            & div {
                width: 29%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.2rem;

                & svg {
                    font-size: 20px;
                    margin-inline: auto;
                    margin-top: .4rem;
                    cursor: pointer;
                    transition: all .2s ease-in-out;

                    &:hover {
                        color: var(--light-blue);
                    }
                }
            }
        }
    }
`

export default function Footer() {
    const now = moment()
    const currentYear = now.year()

    return (
        <FooterStyled>
            <div></div>
            <div>
                <Logo size="big" translate="no">makenedev</Logo>
                <div>
                    <p>Glad to share my work.</p>
                    <p>© {currentYear}, All rights reserved.</p>
                    <div>
                        <Link to="https://www.instagram.com/makenedev" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}

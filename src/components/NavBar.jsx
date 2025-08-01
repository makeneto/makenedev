import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import styled from "styled-components"

import GithubLogo from "./ui/GithubLogo"
import { useScrollToSection } from "../helpers/scrollToSection"
import useNavScrolling from "../hooks/useNavScrolling"
import usePageLocation from "../hooks/usePageLocation"

const Nav = styled.nav`
    pointer-events: auto;
    z-index: 9999;
    position: fixed;

    top: ${({ $isVisible, $isLoaded }) =>
        ($isLoaded ? ($isVisible ? "3%" : "-100px") : "-100px")};
        
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    display: flex;
    padding: 0.4rem 0.4rem 0.4rem 1.2rem;
    border-radius: 10rem;

    background: ${({ $isScrolled }) =>
        ($isScrolled ? "rgba(1,28,64,0.5)" : "transparent")};

    -webkit-backdrop-filter: blur(17px);
    backdrop-filter: ${({ $isScrolled }) =>
        ($isScrolled ? "blur(17px)" : "blur(0)")};

    transition: top .8s ease-in-out, all .2s ease-in-out;

    box-shadow: ${({ $isScrolled }) =>
        ($isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.2)" : "0 0 7px #0000000f")};

    & ul {
        list-style: none;
        display: flex;
        gap: 0.4rem;

        @media (max-width: 480px) {
            gap: 0;
        }

        & li {
            @media (max-width: 884px) {
                font-size: 1.3rem;
            }

            @media (max-width: 480px) {
                font-size: 1rem;
            }

            @media (max-width: 375px) {
                font-size: .9rem;
            }
        }
    }

    @media (max-width: 884px) {
        padding: 0.8rem 0.8rem 0.8rem 1.7rem;
    }

    @media (max-width: 480px) {
        top: ${({ $isVisible }) => ($isVisible ? "-0.1rem" : "-100px")};
        padding: 1rem 1rem 0.9rem .7rem;
        gap: .5rem;
        border-radius: 0;
        width: 100%;
    }
`

export const Logo = styled(Link)`
    width: fit-content;
    margin-inline: auto;
    color: var(--dark-green);
    text-decoration: none;
    font-weight: bolder;
    font-size: ${({ size }) => size === 'big' ? '2.3rem' : '1.3rem'};
    padding-right: 0.1rem;
    border-right: ${({ size }) => size === 'big' ? '.5rem' : '.3rem'} solid var(--light-blue);
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: ${({ size }) => size === 'big' && '1.7rem'};
        margin-inline: ${({ size }) => size === 'big' ? 'auto' : '.3rem'};
    }
`

const NavLinks = styled(Link)`
    text-decoration: none;
    color: white;
    transition: all 0.2s ease-in;
    padding: 0.4rem 0.8rem;
    border-radius: 10rem;
    cursor: pointer;

    &:hover {
        background-color: var(--weak-blue);
    }

    &.active {
        font-size: 2rem;
    }
`

const AnotherNavLinks = styled(ScrollLink)`
    text-decoration: none;
    color: white;
    transition: all 0.2s ease-in;
    padding: 0.4rem 0.8rem;
    border-radius: 10rem;
    cursor: pointer;

    &:hover {
        background-color: var(--weak-blue);
    }
`

const GithubButton = styled(Link)`
    width: max-content;
    background-color: ${({ $isScrolled }) => ($isScrolled ? "var(--light-blue)" : "transparent")};
    border: var(--light-border);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ $isScrolled }) => ($isScrolled ? "black" : "white")};
    font-size: inherit;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 0.9rem;
    border-radius: 10rem;
    cursor: pointer;
    transition: all 0.2s ease-in;

    & svg {
        transition: all 0.2s ease-in;
        fill: ${({ $isScrolled }) => ($isScrolled ? "black" : "white")};
    }

    &:hover {
        background-color: ${({ $isScrolled }) => ($isScrolled ? "rgb(88, 143, 216)" : "var(--weak-blue)")};
    }

    @media (max-width: 884px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        padding: 0.3rem 0.8rem;
    }
`

export default function NavBar() {
    const { isScrolled, isVisible } = useNavScrolling()
    const { isLoaded, navigate } = usePageLocation()
    const scrollToSection = useScrollToSection()
    const isMobile = useMediaQuery({ maxWidth: 480 })

    return (
        <Nav $isScrolled={isScrolled} $isVisible={isVisible} $isMobile={isMobile} $isLoaded={isLoaded}>
            <Logo to="/" translate="no">
                {!isMobile ? (
                    <span>makenedev</span>
                ) : (
                    <span>m</span>
                )}
            </Logo>
            <ul>
                <li>
                    <AnotherNavLinks
                        onClick={() => {
                            if (location.pathname !== "/projects") {
                                navigate("/projects", { replace: true })
                                setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 50)
                            } else {
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        }}
                        to="/projects"
                        smooth
                        duration={500}
                        offset={0}
                        spy
                        aria-label="All Projects"
                        className="link"
                    >
                        Projects
                    </AnotherNavLinks>
                </li>

                <li>
                    <AnotherNavLinks
                        onClick={() => {
                            if (location.pathname !== "/about") {
                                navigate("/about", { replace: true })
                                setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 50)
                            } else {
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        }}
                        to="gallery"
                        smooth
                        duration={500}
                        offset={0}
                        spy
                    >
                        About
                    </AnotherNavLinks>
                </li>


                <li>
                    <AnotherNavLinks
                        onClick={() => scrollToSection("contact")}
                        to="contact"
                        smooth
                        duration={500}
                        offset={-70}
                        spy
                    >
                        Contact
                    </AnotherNavLinks>
                </li>
            </ul>

            <GithubButton
                to="https://github.com/makeneto"
                $isScrolled={isScrolled}
                target="_blank"
                aria-label="Github Profile"
            >
                <GithubLogo />
                {isMobile ? "" : "My Github"}
            </GithubButton>
        </Nav>
    )
}
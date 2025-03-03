import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import styled from "styled-components"
import GithubLogo from "./ui/GithubLogo"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

const Nav = styled.nav`
    pointer-events: auto;
    z-index: 9999;
    position: fixed;
    top: ${({ isVisible }) => (isVisible ? '3%' : '-100px')};
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    border: var(--light-border);
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    display: flex;
    padding: 0.4rem 0.4rem 0.4rem 1.2rem;
    border-radius: 10rem;
    background: rgba(255,255,255,0.45) !important;
    -webkit-backdrop-filter: blur(17px);
    backdrop-filter: blur(17px) !important;
    transition: top 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: ${({ isScrolled }) =>
        isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.2)" : "0 0 7px #0000000f"};
    
    & ul {
        list-style: none;
        display: flex;
        gap: 0.4rem;
    }

    @media (max-width: 480px) {
        top: 2.3%;
        padding: .8rem .5rem .8rem 1rem;
        gap: .3rem;
    }
`

const Logo = styled(Link)`
    color: var(--dark-green);
    text-decoration: none;
    font-weight: bolder;
    font-size: 1.3rem;
    padding-right: 0.1rem;
    border-right: 0.3rem solid var(--green-color);
    cursor: pointer;
`

const NavLinks = styled(NavLink)`
    text-decoration: none;
    color: #6e6e6e;
    transition: all .2s ease-in;
    padding: 0.4rem 0.8rem;
    border-radius: 10rem;

    &:hover {
        background-color: #d6d6d6;
    }

    &.active {
        color: var(--dark-green);
        font-weight: 600;
    }
`

const AnotherNavLinks = styled(ScrollLink)`
    text-decoration: none;
    color: #6e6e6e;
    transition: all .2s ease-in;
    padding: 0.4rem 0.8rem;
    border-radius: 10rem;
    cursor: pointer;

    &:hover {
        background-color: #d6d6d6;
    }
`

const GithubButton = styled(Link)`
    background-color: ${({ isScrolled }) =>
        isScrolled ? "var(--green-color)" : "transparent"};
    border: var(--light-border);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: black;
    font-size: inherit;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 0.9rem;
    border-radius: 10rem;
    cursor: pointer;
    transition: all .2s ease-in;

    &:hover {
        background-color: ${({ isScrolled }) =>
        isScrolled ? "#7de865" : "rgba(175, 183, 180, 0.14)"};
    }
`

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const isMobile = useMediaQuery({ maxWidth: 480 })

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
            if (window.scrollY >= 492) {
                if (window.scrollY > lastScrollY) {
                    setIsVisible(false)
                } else {
                    setIsVisible(true)
                }
            }
            lastScrollY = window.scrollY
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isHome = location.pathname === '/'

    const handleScrollToSection = (section) => {
        if (isHome) {
            scroll.scrollTo(document.getElementById(section).offsetTop - 100, {
                smooth: true,
                duration: 500,
            })
        } else {
            navigate(`/#${section}`)
            setTimeout(() => {
                const element = document.getElementById(section)
                if (element) {
                    scroll.scrollTo(element.offsetTop - 100, {
                        smooth: true,
                        duration: 500,
                    })
                }
            }, 500)
        }
    }

    return (
        <Nav isScrolled={isScrolled} isVisible={isVisible}>
            <Logo to="/">{!isMobile ? 'makenedev' : 'mdev'}</Logo>
            <ul>
                <li>
                    <NavLinks to="/projects">Projects</NavLinks>
                </li>
                <li>
                    <NavLinks to="/about">About</NavLinks>
                </li>
                <li>
                    <AnotherNavLinks
                        onClick={() => handleScrollToSection('contact')}
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        spy={true}
                        className={isHome && location.hash === '#contact' ? 'active' : ''}
                    >
                        Contact
                    </AnotherNavLinks>
                </li>
            </ul>

            {!isMobile &&
                <GithubButton to='https://github.com/makeneto' isScrolled={isScrolled}>
                    <GithubLogo />
                    My Github
                </GithubButton>
            }
        </Nav>
    )
}
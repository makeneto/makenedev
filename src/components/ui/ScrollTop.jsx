import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components"

const ScrollTopButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    background-color: var(--light-blue);
    color: black;
    border: none;
    border-radius: .2rem;
    padding: .6rem;
    cursor: pointer;
    opacity: ${({ show }) => (show ? "1" : "0")};
    transition: all 0.2s ease-in-out;

    &:hover {
        filter: brightness(95%);
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.12);
    }

    &:active {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
    }

    @media (max-width: 480px) {
        bottom: 5%;
    }
`

export default function ScrollTop() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 600) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <ScrollTopButton
            show={showButton}
            onClick={scrollToTop}
            aria-label="Go back to the top"
        >
            <FaArrowUp />
        </ScrollTopButton>
    )
}
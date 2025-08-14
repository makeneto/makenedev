import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components"
import useScrollToTop from "../../hooks/useScrollToTop";

const ScrollTopButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    background-color: var(--light-blue);
    color: black;
    border: none;
    border-radius: .5rem;
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
        bottom: 3%;
    }
`

export default function ScrollTop() {
    const { scrollToTop, showButton } = useScrollToTop()

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
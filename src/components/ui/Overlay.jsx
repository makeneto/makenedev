import styled from "styled-components"

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 887;
    opacity: ${({ show }) => show ? '1' : '0'};
    visibility: ${({ show }) => show ? 'visible' : 'hidden'};
    transition: all .2s ease-in-out;
`
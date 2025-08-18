import styled from "styled-components"

export const Graphs = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    margin-bottom: 7rem;
    
    @media (min-width: 769px) and (max-width: 1024px) {
        margin-bottom: 4rem;
    }

    @media (max-width: 884px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0;
    }
    
    @media (max-width: 480px) {
        margin-top: 2.5rem;
        flex-wrap: wrap;
        padding-left: 0;
        height: 25rem;
    }
`
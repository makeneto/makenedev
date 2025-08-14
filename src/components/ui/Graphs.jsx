import styled from "styled-components"

export const Graphs = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
    margin-bottom: 7rem;
    padding-left: 3.5rem;
    
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
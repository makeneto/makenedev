import styled from "styled-components"

const NotFoundContainer = styled.main`
    width: 100%;
    height: 100dvh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: url('/assets/notfound-bg.png') center center/cover;
        filter: blur(5px) brightness(20%);
        z-index: -1;
    }

    & div {
        width: 31%;
        text-align: center;
        color: white;

        & h1 {
            font-size: 7rem;
            font-weight: bolder;

            @media (max-width: 480px) {
                font-size: 6rem;
            }
        }

        & p {
            text-align: center;
        }

        @media (max-width: 480px) {
            width: 90%;
        }
    }
`

export default function NotFoundPage() {
    return (
        <NotFoundContainer>
            <div>
                <h1>404</h1>
                <p>Oops, Page Not Found. Check the address entered or return to the home page to continue browsing.</p>
            </div>
        </NotFoundContainer>
    )
}

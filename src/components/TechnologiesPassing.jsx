import styled, { keyframes } from "styled-components";

const TechPassing = styled.section`
    width: 100vw;
    margin: 11rem 0 13rem;
    background-color: white;

    @media (max-width: 1280px) {
        margin: 5rem 0 10rem;
    }

    @media (max-width: 480px) {
        margin: 5rem 0 7rem;
    }
`

const scrollLeft = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
`;

const scrollRight = keyframes`
    from {
        transform: translateX(-50%);
    }
    to {
        transform: translateX(0);
    }
`;

export const SmallTitle = styled.h2`
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--dark-grey);
    margin-bottom: 4rem;

    @media (max-width: 1280px) {
        font-size: 1.2rem;
    }
`

const MarqueeContainer = styled.div`
    position: relative;
    width: 60%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media (max-width: 1280px) {
        width: 75%;
    }

    @media (max-width: 480px) {
        width: 90%;
        gap: 2.2rem;
    }
`;

const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    pointer-events: none;
    z-index: 1;

    &.left {
        left: 0;
        background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);

        @media (max-width: 480px) {
            left: -1%;
        }
    }

    &.right {
        right: 0;
        background: linear-gradient(to left, white 0%, rgba(255, 255, 255, 0) 100%);
        
        @media (max-width: 480px) {
            right: -1%;
        }
    }

`;

const MarqueeWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const Marquee = styled.div`
    white-space: nowrap;
    display: flex;
    gap: 3.4rem;
    animation: ${(props) => (props.reverse ? scrollRight : scrollLeft)} 30s linear infinite;

    @media (max-width: 480px) {
        gap: 2rem;
        animation: ${(props) => (props.reverse ? scrollRight : scrollLeft)} 10s linear infinite;
    }
`;

const TechItem = styled.img`
    width: auto;
    height: 2.2rem;

    @media (max-width: 1280px) {
        height: 1.8rem;
    }

    @media (max-width: 480px) {
        height: 1.6rem;
    }
`;

const technologies1 = [
    "/images/notion-logo.png", // Notion
    "/images/vercel-logo.png", // Vercel
    "/images/vs-code-logo.png", // VS Code
    "/images/github-logo.jpg", // GitHub
    "/images/chatgpt-logo.png", // ChatGPT
    "/images/linkedin-logo.png", // LinkedIn
    "/images/forbes-logo.png", // Forbes
]

const technologies2 = [
    "/images/notion-calendar-logo.png", // Notion Calendar
    "/images/adobe-logo.png", // Adobe
    "/images/figma-logo.png", // Figma
    "/images/spotify-logo.png", // Spotify
    "/images/youtube-logo.png", // YouTube
    "/images/netflix-logo.png", // Netflix
]

export default function TechnologiesPassing() {
    return (
        <TechPassing
            id="techs"
            smooth={true}
            duration={500}
            offset={-100}
        >
            <SmallTitle>Apps That Power My Workflow </SmallTitle>

            <MarqueeContainer>
                <GradientOverlay className="left" />
                <GradientOverlay className="right" />
                <MarqueeWrapper>
                    <Marquee>
                        {[...technologies1, ...technologies1, ...technologies1].map((tech, index) => (
                            <TechItem key={index} src={tech} alt="##" />
                        ))}
                    </Marquee>
                </MarqueeWrapper>
                <MarqueeWrapper>
                    <Marquee reverse>
                        {[...technologies2, ...technologies2, ...technologies2].map((tech, index) => (
                            <TechItem key={index} src={tech} alt="##" />
                        ))}
                    </Marquee>
                </MarqueeWrapper>
            </MarqueeContainer>
        </TechPassing>
    );
}

import styled from "styled-components"
// eslint-disable-next-line
import { motion } from "framer-motion";

const Gallery = styled.div`
    height: 48rem !important;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;
    margin: 9rem 7rem 10rem;

    @media (max-width: 1919px){
        height: 35rem;
        margin: 9rem 4rem 11rem;
    }

    @media (max-width: 1280px) {
        height: 30rem !important;
        gap: 8px !important;
        margin: 7rem 3rem 10rem !important;
    }

    @media (max-height: 600px) {
        height: 26rem;
        gap: 8px;
        margin: 5.3rem 3rem 10rem;        
    }

    @media (max-width: 884px) {
        height: 19rem;
        margin: 12rem 3rem 8rem;
    }

    @media (max-width: 480px) {
        height: 11rem !important;
        margin: 8rem 1rem 5rem !important;
    }

    & div {
        background-color: var(--light-blue);
        position: relative;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const images = [
    "/assets/gallery/1.webp",
    "/assets/gallery/2.webp",
    "/assets/gallery/3.webp",
    "/assets/gallery/4.webp",
    "/assets/gallery/5.webp",
    "/assets/gallery/6.webp",
    "/assets/gallery/7.webp",
    "/assets/gallery/8.webp",
    "/assets/gallery/9.webp",
];

const gridPositions = [
    { gridRow: "span 5 / span 5" },
    { gridRow: "span 3 / span 3" },
    { gridRow: "span 3 / span 3", gridColumnStart: 3, gridRowStart: 3 },
    { gridRow: "span 2 / span 2", gridColumnStart: 3, gridRowStart: 1 },
    { gridRow: "span 2 / span 2", gridColumnStart: 2, gridRowStart: 4 },
    { gridRow: "span 3 / span 3", gridColumnStart: 4, gridRowStart: 3 },
    { gridRow: "span 3 / span 3", gridColumnStart: 5, gridRowStart: 3 },
    { gridRow: "span 2 / span 2", gridColumnStart: 4, gridRowStart: 1 },
    { gridRow: "span 2 / span 2", gridColumnStart: 5, gridRowStart: 1 },
];

export default function HistoryGallery() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
            <Gallery>
                {images.map((src, index) => (
                    <div key={index} style={gridPositions[index]}>
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            loading="lazy"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>
                ))}
            </Gallery>
        </motion.div>
    );
}

import styled from "styled-components"
// eslint-disable-next-line
import { motion } from "framer-motion";

const Gallery = styled.div`
    height: 48rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;
    margin: 9rem 7rem 10rem;

    @media (max-width: 1280px) {
        height: 30rem;
        gap: 8px;
        margin: 7rem 3rem 10rem;
    }

    @media (max-width: 884px) {
        height: 19rem;
        margin: 12rem 3rem 8rem;
    }

    @media (max-width: 480px) {
        height: 11rem;
        margin: 8rem 1rem 5rem;
    }

    & div {
        background-color: var(--light-grey);
    }

    & div:first-child {
        background: url('/images/gallery/1.jpg') center center/cover;
        grid-row: span 5 / span 5;
    }

    & div:nth-child(2) {
        background: url('/images/gallery/2.jpg') center center/cover;
        grid-row: span 3 / span 3;
    }
    
    & div:nth-child(3) {
        background: url('/images/gallery/3.jpg') center center/cover;
        grid-row: span 3 / span 3;
        grid-column-start: 3;
        grid-row-start: 3;
    }

    & div:nth-child(4) {
        background: url('/images/gallery/4.jpg') top center/cover;
        grid-row: span 2 / span 2;
        grid-column-start: 3;
        grid-row-start: 1;
    }

    & div:nth-child(5) {
        background: url('/images/gallery/5.jpg') top center/cover;
        grid-row: span 2 / span 2;
        grid-column-start: 2;
        grid-row-start: 4;
    }

    & div:nth-child(6) {
        background: url('/images/gallery/6.jpg') center center/cover;
        grid-row: span 3 / span 3;
        grid-column-start: 4;
        grid-row-start: 3;
    }

    & div:nth-child(7) {
        background: url('/images/gallery/7.jpg') top center/cover;
        grid-row: span 3 / span 3;
        grid-column-start: 5;
        grid-row-start: 3;
    }

    & div:nth-child(8) {
        background: url('/images/gallery/8.jpg') top center/cover;
        grid-row: span 2 / span 2;
        grid-column-start: 4;
        grid-row-start: 1;
    }

    & div:last-child {
        background: url('/images/gallery/9.jpg') top center/cover;
        grid-row: span 2 / span 2;
        grid-column-start: 5;
        grid-row-start: 1;
    }
`

export default function HistoryGallery() {

    const galleryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={galleryVariants}
        >
            <Gallery id="gallery">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Gallery>
        </motion.div>
    );
}

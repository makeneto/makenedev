//eslint-disable-next-line
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import HistoryGallery from "../components/HistoryGallery"
import HistoryText from "../components/HistoryText"
import FavoriteSingers from "../components/FavoriteSingers"
import AboutProjects from "../components/AboutProjects"
import FAQ from "../components/FAQ"

export default function About() {
    const [refFavoriteSingers, inViewFavoriteSingers] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refAboutProjects, inViewAboutProjects] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refFAQ, inViewFAQ] = useInView({ threshold: 0.2, triggerOnce: true })

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <main>
            <HistoryGallery />
            <HistoryText />

            <motion.div
                ref={refFavoriteSingers}
                variants={fadeInVariants}
                initial="hidden"
                animate={inViewFavoriteSingers ? "visible" : "hidden"}
            >
                <FavoriteSingers />
            </motion.div>

            <motion.div
                ref={refAboutProjects}
                variants={fadeInVariants}
                initial="hidden"
                animate={inViewAboutProjects ? "visible" : "hidden"}
            >
                <AboutProjects />
            </motion.div>

            <motion.div
                ref={refFAQ}
                variants={fadeInVariants}
                initial="hidden"
                animate={inViewFAQ ? "visible" : "hidden"}
            >
                <FAQ />
            </motion.div>
        </main>
    )
}
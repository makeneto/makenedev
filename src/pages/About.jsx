//eslint-disable-next-line
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import HistoryGallery from "../components/HistoryGallery"
import HistoryText from "../components/HistoryText"
// import Experiences from "../components/Experiences"
import RadarGraphs from "../components/RadarGraphs"
import Books from "../components/Books"
import FavoriteSingers from "../components/FavoriteSingers"
import AboutProjects from "../components/AboutProjects"
import FAQ from "../components/FAQ"

export default function About() {
    // const [refExperiences, inViewExperiences] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refRadarGraphs, inViewRadarGraphs] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refFavoriteSingers, inViewFavoriteSingers] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refAboutProjects, inViewAboutProjects] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refFAQ, inViewFAQ] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refBooks, inViewBooks] = useInView({ threshold: 0.2, triggerOnce: true })

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <main>
            <HistoryGallery />
            <HistoryText />

            {/* <motion.div
                ref={refExperiences}
                variants={fadeInVariants}
                initial="hidden"
                animate={inViewExperiences ? "visible" : "hidden"}
            >
                <Experiences />
            </motion.div> */}

            <motion.div
                ref={refRadarGraphs}
                variants={fadeInVariants}
                initial="hidden"
                animate={inViewRadarGraphs ? "visible" : "hidden"}
            >
                <RadarGraphs />
            </motion.div>

            <motion.div
                ref={refBooks}
                variants={fadeInVariants}
                initial="hidden"
                animate={inViewBooks ? "visible" : "hidden"}
            >
                <Books />
            </motion.div>

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
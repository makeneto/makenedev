// eslint-disable-next-line
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Header from "../components/Header"
import PersonalPages from "../components/PersonalPages"
import RadarGraphs from "../components/RadarGraphs"
import Certificates from '../components/Certificates'
import LastProjects from "../components/LastProjects"
import WorkSection from "../components/WorkSection"
import ContactMe from "../components/ContactMe"
import FAQ from "../components/FAQ"

export default function Home() {
    const [refRadarGraphs, inViewRadarGraphs] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refWorkSection, inViewWorkSection] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refCertificates, inViewCertificates] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refFAQ, inViewFAQ] = useInView({ threshold: 0.2, triggerOnce: true })

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <>
            <Header />

            <article>
                <PersonalPages />
            </article>

            <main>
                <motion.div
                    ref={refRadarGraphs}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={inViewRadarGraphs ? "visible" : "hidden"}
                >
                    <RadarGraphs />
                </motion.div>

                <motion.div
                    ref={refWorkSection}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={inViewWorkSection ? "visible" : "hidden"}
                >
                    <WorkSection />
                </motion.div>

                <motion.div
                    ref={refCertificates}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={inViewCertificates ? "visible" : "hidden"}
                >
                    <Certificates />
                </motion.div>

                <LastProjects />

                <ContactMe />

                <motion.div
                    ref={refFAQ}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={inViewFAQ ? "visible" : "hidden"}
                >
                    <FAQ />
                </motion.div>
            </main>
        </>
    )
}
// eslint-disable-next-line
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Header from "../components/Header"
import PersonalPages from "../components/PersonalPages"
import Certificates from '../components/Certificates'
import LastProjects from "../components/LastProjects"
import WorkSection from "../components/WorkSection"
import ContactMe from "../components/ContactMe"

export default function Home() {
    const [refWorkSection, inViewWorkSection] = useInView({ threshold: 0.2, triggerOnce: true })
    const [refCertificates, inViewCertificates] = useInView({ threshold: 0.2, triggerOnce: true })

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
            </main>
        </>
    )
}
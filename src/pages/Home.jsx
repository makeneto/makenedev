import Header from "../components/Header"
import PersonalPages from "../components/PersonalPages"
import RadarGraphs from "../components/RadarGraphs"
import Certificates from '../components/Certificates'
import LastProjects from "../components/LastProjects"
import WorkSection from "../components/WorkSection"
import ContactMe from "../components/ContactMe"
import FAQ from "../components/FAQ"

export default function Home() {

    return (
        <>
            <Header />

            <article>
                <PersonalPages />
            </article>

            <main>
                <RadarGraphs />
                <WorkSection />
                <Certificates />
                <LastProjects />
                <ContactMe />
                <FAQ />
            </main>
        </>
    )
}

import HistoryText from "../components/ui/HistoryText"
import HistoryGallery from "../components/ui/HistoryGallery"
import Map from "../components/Map"
import AboutProjects from "../components/AboutProjects"

export default function About() {
    return (
        <main>
            <HistoryGallery />
            <HistoryText />
            <AboutProjects />
            {/* <Map /> */}
        </main>
    )
}

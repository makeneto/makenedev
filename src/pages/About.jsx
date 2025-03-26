import HistoryGallery from "../components/HistoryGallery"
import HistoryText from "../components/HistoryText"
import FavoriteSingers from "../components/FavoriteSingers"
import AboutProjects from "../components/AboutProjects"

export default function About() {
    return (
        <main>
            <HistoryGallery />
            <HistoryText />
            <FavoriteSingers />
            <AboutProjects />
        </main>
    )
}

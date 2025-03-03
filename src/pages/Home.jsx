import Header from '../components/Header'
import PersonalPages from '../components/PersonalPages'
import TechnologiesPassing from '../components/TechnologiesPassing'
import RadarGraph from '../components/RadarGraph'
// import Certificados from '../components/Certificados'
import LastProjects from '../components/LastProjects'
import FavoriteSingers from '../components/FavoriteSingers'
import ContactMe from '../components/ContactMe'
import FAQ from '../components/FAQ'

export default function Home() {

  return (
    <b>
      <Header />
      <article>
        <PersonalPages />
      </article>
      <main>
        <TechnologiesPassing />
        <RadarGraph />
        {/* <Certificados /> */}
        <LastProjects />
        <FavoriteSingers />
        <ContactMe />
        <FAQ />
      </main>
    </b>
  )
}
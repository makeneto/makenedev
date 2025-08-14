import styled from 'styled-components'
import { mobileProjects } from '../data/mobileProjects'
import MobileCarousel from './ui/MobileCarousel'

const MobileView = styled.section`
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
    row-gap: 3rem;

    @media (max-width: 480px) {
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
        margin-bottom: 5rem;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export default function ProjectsSection() {
    return (
        <MobileView>
            {mobileProjects.map(project => (
                <MobileCarousel key={project.id} project={project} />
            ))}
        </MobileView>
    )
}



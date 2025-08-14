import styled from "styled-components"
import MobileProjects from "../components/MobileProjects"
import WebProjects from "../components/WebProjects"
import { useState } from "react"

const Projects = styled.section`
  width: 70%;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 95%;
  }
  
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 93%;
  }
`

const Header = styled.header`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--primary-color);

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }

  }

  @media (max-width: 480px) {
    margin-top: 6rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 10rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 6rem;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    margin-top: 7.5rem;
  }
`

const ChooseProject = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: var(--hover-blue);
  padding: 0.4rem 0.4rem;
  border-radius: 0.4rem;

  & p {
    font-size: 0.9rem;
    padding: 0.2rem 0.6rem;
    border-radius: 0.4rem;
    cursor: pointer;
    user-select: none;
  }
`

const ChooseMobile = styled.p`
  background-color: ${({ isMobile }) => isMobile ? `var(--dark-blue)` : "transparent"};
`

const ChooseWeb = styled.p`
    background-color: ${({ isMobile }) => !isMobile ? `var(--dark-blue)` : "transparent"};
`

export default function AllProjects() {
  const [isMobileProject, setIsMobileProject] = useState(true)

  return (
    <Projects>
      <Header>
        <h1>All Projects</h1>

        <ChooseProject>
          <ChooseMobile
            isMobile={isMobileProject}
            onClick={() => setIsMobileProject(true)}
          >
            Mobile
          </ChooseMobile>
          <ChooseWeb
            isMobile={isMobileProject}
            onClick={() => setIsMobileProject(false)}
          >
            Web
          </ChooseWeb>
        </ChooseProject>
      </Header>

      {isMobileProject ?
        <MobileProjects />
        :
        <WebProjects />
      }
    </Projects>
  )
}

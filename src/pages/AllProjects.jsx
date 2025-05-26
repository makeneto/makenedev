import styled from "styled-components";
import ProjectsTable from "../components/ProjectsTable";

const Projects = styled.section`
  width: 70%;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    width: 90%;
  }

  @media (max-width: 884px) {
    width: 95%;
  }
  
  @media (max-width: 1280px) {
    width: 93%;
  }
`

const Header = styled.header`
  margin-top: 10rem;

  & h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--primary-color);

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }

  }

  @media (max-width: 480px) {
    margin-top: 6rem !important;
  }

  @media (max-width: 884px) {
    margin-top: 10rem;
  }
  
  @media (max-width: 1280px) {
    margin-top: 6rem;
  }

  @media (max-width: 1919px){
    margin-top: 9rem;
  }
`

export default function AllProjects() {
  return (
    <Projects>
      <Header>
        <h1>All Projects</h1>
      </Header>

      <ProjectsTable />
    </Projects>
  );
}

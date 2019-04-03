import styled from 'styled-components'


const Outerbox = styled.div`
  display: grid;
  position: absolute;
  left: 0px; right: 0px; 
  grid-template-columns: 2fr 3fr 3fr 3fr 2fr;
  grid-template-rows: 2fr 1fr 1fr 1fr 1fr;
  margin-top: 900px;
  grid-column-gap: 7px;
  .barfriendsapp {
    grid-column: 2;
    grid-row: 2;
  }
  .barfriendssite {
    grid-column: 3;
    grid-row: 2;
  }
  .pepissite {
    grid-column: 4;
    grid-row: 2;
  }
  p {
    grid-column: 1 / -1;
    grid-row: 1;
    font-size: 45px;
    font-weight: 700;
    text-align: center;
    color: white;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.orange};
  }
`;
 const ProjectItem = styled.div`
  background: black;
  display: grid;
`;

const Projects = () => (
  <Outerbox>
    <p>Projects</p>
    <ProjectItem className="barfriendsapp">
     THis is a Project
    </ProjectItem>
    <ProjectItem className="barfriendssite">
      THis is a Project
    </ProjectItem>
    <ProjectItem className="pepissite">
      THis is a Project
    </ProjectItem>
  </Outerbox>
);
export default Projects;

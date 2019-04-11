import styled from 'styled-components';
import Skills2 from '../components/Skills2';
import { PageTitle } from '../components/styles/TitleStyle';

const PageGrid = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 40px;
`;


const Skill = () => (
  <PageGrid>
    {/* <PageTitle><u>C</u>ODE SKILLS</PageTitle> */}
    <Skills2/>
  </PageGrid>
);
export default Skill;

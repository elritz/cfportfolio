import styled from 'styled-components'
import BarfriendsOne from '../components/Projects/Barfriends/BarfriendsOne'
import PepisOne from '../components/Projects/Pepis/PepisOne'

const OuterBox = styled.div``;

const Intro = styled.p`
  font-size: 100px;
  font-weight: 200;
  margin-left: 10%;
  height: 10vh;
  @media (max-width: 800px) {
    margin-top: 150px;
    font-size: 60px;
  };
`;

const AboutMe = styled.div`
  /* background: red; */
  width: 80vw;height: 100%;
  text-align: left;
  font-size: 50px;
  font-weight: 800;
  margin-left: 50%; margin-bottom: 20vh;
  transform: translateX(-50%);
  @media (max-width: 800px) {
    font-size: 40px;
  };
`;
const Project = () => (
  <OuterBox>
    <Intro><span style={{fontWeight: '800', fontSize: '60px'}}>MY</span>Projects</Intro>
    <AboutMe>Here is a showcase of my biggest projects. I design, develop and manage all aspects for mobile apps, websites, webapps, and the UI/UX.
      <br/>
      <span style={{fontSize: '35px',color: '#FF7000'}} >let me show you what I do</span><span style={{fontSize: '40px',color: '#FF7000'}}>...</span>
    </AboutMe>
    <BarfriendsOne />
    <PepisOne />
  </OuterBox>
);
export default Project;

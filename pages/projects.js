import styled from 'styled-components'
import BarfriendsOne from '../components/Projects/Barfriends/BarfriendsOne'
import PepisOne from '../components/Projects/Pepis/PepisOne'

const OuterBox = styled.div`
  /* width: 100vw; */
  position: absolute;
  left: 0px; right: 0px;
`;

const Project = () => (
  <OuterBox>
    <BarfriendsOne />
    <PepisOne />
  </OuterBox>
);
export default Project;

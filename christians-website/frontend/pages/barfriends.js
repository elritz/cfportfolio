import styled from 'styled-components'
import BarfriendsOne from '../components/Projects/Barfriends/BarfriendsOne'
import BarfriendsTwo from '../components/Projects/Barfriends/BarfriendsTwo'

const OuterBox = styled.div`
  background: black;
  position: absolute;
  top: 0px; bottom: 0px;
  left: 0px; right: 0px;
`;

const Project = () => (
  <OuterBox>
    <BarfriendsOne />
    <BarfriendsTwo />
  </OuterBox>
);
export default Project;
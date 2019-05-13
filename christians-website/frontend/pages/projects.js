import styled from 'styled-components'
import Head from 'next/head'
// import List from '../components/Works/List'
import Barfriends from '../components/Works/Barfriends'

const OuterBox = styled.div`
  position: absolute;
  top: 110px;  left: 0px; right: 0px;
`;

const Project = () => (
  <OuterBox>
      <Head>
        <title>CF | Works</title>
      </Head>
      <Barfriends />
  </OuterBox>
);
export default Project;


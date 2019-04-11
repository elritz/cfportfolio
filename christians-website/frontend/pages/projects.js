import styled from 'styled-components'
import Head from 'next/head'
import List from '../components/Works/List'

const OuterBox = styled.div`
  position: absolute;
  top: 100px;  left: 0px; right: 0px;
`;

const Project = () => (
  <OuterBox>
      <Head>
        <title>CF | Works</title>
      </Head>
      <List />
  </OuterBox>
);
export default Project;


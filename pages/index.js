import styled from 'styled-components'
import Head from 'next/head'

import Posts from '../components/AboutMe/Posts'
import CreatePost from '../components/AboutMe/CreatePost';
import { PageTitle } from '../components/styles/TitleStyle'


const PageGrid = styled.div`
  color: black;
  margin-top: 50vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 40px;
`;

const Home = () => (
  <PageGrid>
      <Head>
        <title>CF | About</title>
      </Head>
    <PageTitle><u>A</u>bout Myself.</PageTitle>
    <br/>
    <Posts />
  </PageGrid>
);
export default Home

import styled from 'styled-components'
import Head from 'next/head'
import Profile from '../components/Home/Profile'
import Current from '../components/Home/Current'
import Projects from '../components/Home/Projects'

// import Posts from '../components/AboutMe/Posts'
// import CreatePost from '../components/AboutMe/CreatePost';
// import { PageTitle } from '../components/styles/TitleStyle'


const Outerbox = styled.div`
`;

const Home = () => (
  <Outerbox>
      <Head>
        <title>CF | About</title>
      </Head>
    <Profile />
    {/* <PageTitle><u>A</u>bout Myself.</PageTitle> */}
    <Current />
    <Projects />
    {/* <Posts /> */}
  </Outerbox>
);
export default Home

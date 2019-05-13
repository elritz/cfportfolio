import styled from 'styled-components'
import Head from 'next/head'
import Profile from '../components/Home/Profile'
import Current from '../components/Home/Current'
import Projects from '../components/Home/Projects'

// import Posts from '../components/AboutMe/Posts'
// import CreatePost from '../components/AboutMe/CreatePost';
// import { PageTitle } from '../components/styles/TitleStyle'


const Outerbox = styled.div`
  width: 100vw;
`;

const Home = () => (
  <Outerbox>
      <Head>
        <title>CF | Designer, Developer & Entrepeneur </title>
      </Head>
    <Profile />
    <Current />
    {/* <Projects /> */}
  </Outerbox>
);
export default Home

import styled from 'styled-components'
import Link from 'next/link'

const Outerbox = styled.div`
  display: grid;
  grid-template-columns:1fr 3fr 2fr 3fr 1fr 1fr;
  grid-template-rows: 75px 300px 75px;
  margin-top: 600px;
  margin-bottom: 100px;
  @media (max-width: 1400px) {
    margin-top: 900px;
  };
  @media (max-width: 1360px) {
    margin-top: 600px;
  }
  @media (max-width: 1000px) {
    margin-top: 700px
  };
  @media (max-width: 850px) {
    margin-top: 550px
  };
  @media (max-width: 600px) {
    margin-top: 800px
  };
  .current {
      grid-column: 2 / 6;
      grid-row: 2;
      font-size: 24px;
    @media (max-width: 1360px) {
      margin-top: 100px;
      grid-row: 2;
      line-height: 65px;
    };
    @media (max-width: 1200px) {
      margin-top: 100px;
      grid-column: 1 / -1;
      line-height: 55px;
    };
    @media (max-width: 900px) {
      margin-top: 150px;
      line-height: 55px;
    };
    @media (max-width: 750px) {
      margin-top: 150px;
      font-size: 25px;
      line-height: 50px
    };
    @media (max-width: 600px) {
      margin-top: 60px;
      line-height: 55px;
    };
    @media (max-width: 600px) {
      margin-top: -90px;
      line-height: 55px;
    };
  }
`;
 const CurrentBox = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  font-weight: 300;
  line-height: 50px;
  height: 100%;
  color: black;
  padding: 30px;
`;



const Current = () => (
  <Outerbox>
    <CurrentBox className="current">
      I am currently freelancing, working on websites for local businesses. I built a IOS app for going out, and started a company <a href="https//:www.barfriends.com">Barfriends Inc.</a>. I created the UI/UX expereiences, as well as develop and manage the technologies used in the IOS app and website, I'm also operating the business and marketing/promotion.
      <br/>
      <span>Check out my <Link href="/projects"><a style={{ fontWeight: '600', color: '#FF7000'}}>Projects</a></Link> page for more about Barfriends.</span>
    </CurrentBox>
  </Outerbox>
);

export default Current;
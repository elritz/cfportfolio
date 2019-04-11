import styled from 'styled-components'

const Outerbox = styled.div`
  /* background: red; */
  position: absolute;
  right: 0px; left: 0px;
  display: grid;
  grid-template-columns:1fr 3fr 2fr 3fr 1fr 1fr;
  grid-template-rows: 75px 300px 75px;
  margin-top: 600px;
  @media (max-width: 1400px) {
    margin-top: 750px;
  };
  .current {
      grid-column: 2 / 6;
      grid-row: 2;
    @media (max-width: 1400px) {
      margin-top: 10px;
      grid-row: 2;
      font-size: 45px;
      line-height: 65px;
    };
    @media (max-width: 1200px) {
      margin-top: 60px;
      grid-column: 1 / -1;
      font-size: 35px;
      line-height: 55px;
    };
    @media (max-width: 750px) {
      margin-top: 110px;
      font-size: 25px;
      line-height: 50px
    };
    @media (max-width: 600px) {
      margin-top: 60px;
      font-size: 26px;
      line-height: 55px;
    };
    @media (max-width: 600px) {
      margin-top: 60px;
      font-size: 20px;
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
 color: white;
 padding: 30px;

`;



const Current = () => (
  <Outerbox>
    <CurrentBox className="current">
      I am currently freelancing working on a website for local businesses and developing a mobile app Barfriends. I design, develop and manage all aspects for mobile apps, websites, webapps, and the UI/UX. Below is a showcase of my biggest projects.
      <br/>
      <span style={{ fontWeight: '600', color: '#FF7000'}}>let me show you what I do...</span>
      {/* Here is a showcase of my biggest projects.  */}
    </CurrentBox>
    {/* <CurrentBox className="previous">
      I am currently freelance developing for local businesses and for Upworks clients.
    </CurrentBox> */}
  </Outerbox>
);

export default Current;
import styled from 'styled-components'

const Outerbox = styled.div`
  /* background: red; */
  position: absolute;
  right: 0px; left: 0px;
  display: grid;
  grid-template-columns:1fr 3fr 2fr 3fr 1fr 1fr;
  grid-template-rows: 75px 300px 75px;
  margin-top: 600px;
  .current {
    grid-column: 2 / 4;
    grid-row: 2;
  }
  .previous {
    grid-column: 4 /  6;
    grid-row: 2;
  }
`;
 const CurrentBox = styled.div`
 font-family: 'Roboto Mono', monospace;
 font-size: 24px;
 font-weight: 300;
 line-height: 50px;
 color: white;
 padding: 30px;

`;

const Current = () => (
  <Outerbox>
    <CurrentBox className="current">
      I am currently freelancing working on a website for local businesses and developing a mobile app Barfriends.
    </CurrentBox>
    <CurrentBox className="previous">
      I am currently freelance developing for local businesses and for Upworks clients.
    </CurrentBox>
  </Outerbox>
);

export default Current;
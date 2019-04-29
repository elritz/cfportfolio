import styled from 'styled-components'
import Link from 'next/link'

const bficon = '../../../static/images/Works/barfriendsIcon.svg'
const pepisicon = '../../../static/images/Works/pepisguy.svg'
const NotDone = '../../static/images/NotDone.svg'

const Lists = () => (
  <OuterBox>
    <ListBox>
      <ul>
        <li>
          <img style={{height: '100px'}} src={bficon} alt=""/>
          <h1>Barfriends</h1>
          <h4>Description:</h4>
          <Link href="/">
            <a>Link</a> 
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nesciunt quia ipsam, dicta architecto necessitatibus esse asperiores voluptates!</p>
        </li>
        <li>
          <img style={{height: '120px'}} src={pepisicon} alt=""/>
          <h1>Pepi's Pizza</h1>
          <h4>Description:</h4>
          <Link href="/">
            <a>Link</a> 
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nesciunt quia ipsam, dicta architecto necessitatibus esse asperiores voluptates!</p>
        </li>
      </ul>
    </ListBox>
    <img style={{height: '500px', marginLeft: '50%', transform: 'translateX(-50%)'}} src={NotDone} alt=""/>
  </OuterBox>
);


const OuterBox = styled.div`
  position: relative;
  display: inline-block;
  width: 100vw; height: 100%;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    margin-top: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  };
`;

const ListBox = styled.div`
  max-width: 800px;
  width: calc(100vw - 2em);
  margin-left: 50%;
  transform: translateX(-50%);
 ul {
    display: inline;
    list-style: none;
   li {
      /* background: purple; */
      margin-top: 20px;
      /* border-top: 1px solid white; */
      border-bottom: 1px solid #F6F7F650;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 50px 20px 20px 100px;
      padding: 10px;
      width: 100%; min-width: 600px;
      justify-content: space-evenly;
      img {
        grid-row: 1 / -1;
        place-self: center;
      }
      h1 {
        grid-row: 1;
        grid-column: 2 / 4;
        margin: 0;
        font-size: 25px;
        color: black;
      }
      h4 {
        /* background: red; */
        grid-row: 2;
        grid-column: 2 / 3;
        align-self: start;
        line-height: 20px;
        margin: 0;
        font-weight: 200;
        color: black;
      }
      p {
        grid-row: 3 / 5;
        grid-column: 2 / -1;
        color: black;
      }
      a {
        /* background: blue; */
        color: black;
        grid-row: 1 / 2;
        grid-column: 4 / -1;
        text-align: center;
        line-height: 40px;
        vertical-align: center;
        border-bottom: 1px dashed white;
        :hover {
          color: #ff700090;
        }
      }
   }
 }
`;


export default Lists;
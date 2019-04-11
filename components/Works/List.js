import styled from 'styled-components'
import Link from 'next/link'
const icon = '../../../static/images/BarfriendsApp/barfriendsIcon.svg'


const Lists = () => (
  <OuterBox>
    <ListBox>
      <ul>
        <li>
          <img style={{height: '100px'}} src={icon} alt=""/>
          <h1>Barfriends</h1>
          <h3>Description:</h3>
          <Link href="/">
            <a>Project Page</a> 
          </Link>
        </li>
      </ul>
    </ListBox>
  </OuterBox>
);


const OuterBox = styled.div`
  position: fixed;
  display: inline-block;
  width: 100vw; height: 100%;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    margin-top: 50px;
  };
`;

const ListBox = styled.div`
  background: red;
  max-width: 800px;
  width: calc(100vw - 2em);
  margin-left: 50%;
  transform: translateX(-50%);
 ul {
    display: inline;
    list-style: none;
   li {
     background: purple;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows:1fr;
     width: 100%;
     justify-content: space-evenly;
   }
 }
`;


export default Lists;
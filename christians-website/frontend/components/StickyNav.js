import Link from 'next/link';
import styled from 'styled-components';
import { LinkName } from './styles/NavStyles';

const NavStyles2 = styled.div`
  position: fixed;
  top: 70px; 
  right: 0px;
  padding: 10px 30px;
  background: #1e1e1e;
  border-radius: 20px 0px 0px 20px;
  z-index: 5;
  a {
    border-radius: 0px;
    font-size: 25px;
    /* background:blue; */
  }
  @media (max-width: 950px) {
  border-radius: 0px;
  };
  @media (max-width: 800px) {
    top: 0px;
    right: 0px; left: 0;
  };
  @media (max-width: 500px) {
    height: 120px;
    padding: 10px 0px;
    a {
      font-size: 18px;
      margin: 10px;
    }
  };
`;

const StickyLinkBox = styled.div`
  grid-column: 4 / 6;
  margin-top: 25px;
  height: 35px;
  transform: translateY(-50%);
  transform: scew(10deg);
  z-index: 5;  
  a,
  button {
    border: 0;
    margin: 0px 15px;
    padding: 1.5rem 2rem;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.5em;
    border: 0;
    cursor: pointer;
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.offWhite};;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 3.5rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1000px) {
    padding: 1rem 0;
    font-size: 0.8em;
    
  }
  @media (max-width: 950px) {
    grid-column: 1 / -1;
    grid-row-start: 2;   
    a {
      padding: 1rem 1rem;
      font-size: 1.2em;
    }
  };
  @media (max-width: 600px) {
    grid-column: 1 / -1;
    grid-row-start: 2;   
    a {
      padding: 0.5rem 0.6rem;
      font-size: 1.2em;
    }
  };
`;

const StickyNav = () => (
    <NavStyles2>
      <StickyLinkBox>
        {/* <Link href='/'>
          <a>Home</a>
        </Link> */}
        <Link href='/projects'>
          <a>Works</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
        <Link href='/skill'>
          <a>SKILLS</a>
        </Link>
      </StickyLinkBox>
    </NavStyles2>
);

export default StickyNav;
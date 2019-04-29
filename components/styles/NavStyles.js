import styled from 'styled-components';

const NavStyles = styled.div`
  position: fixed;
  top: -100px; left: 0; right: 0;
  z-index: 100;
  background: ${props => props.theme.orange};
`;
const LinkBox = styled.div`
  margin-top: -35px;
  height: 30px;
  width: 100%;
  margin-left: 100px;
  transform: translateX(-50%);
  transform: translateY(-50%);
  transform: scew(10deg);
  /* background: green;    */
  a,
  button {
    color: ${props => props.theme.white};
    border: 0;
    margin: 0px 15px;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    padding: 1.5rem 1.5rem;
    font-size: 14px;
    border: 0;
    cursor: pointer;
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.white};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.white};;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2.5rem;
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
    /* padding: 1rem 0; */
    margin-left: 10%;
  }
  @media (max-width: 950px) {
    grid-column: 1 / -1;
    grid-row: 1;   
    margin-left: 100px;
  };
  @media (max-width: 550px) {
    grid-row-start: 1;  
    margin-top: 20px;
    margin-left: 0%;
    a {
      padding: 0.5rem 1.0rem;
      font-size: 12px;
    }
  };
`;


const LinkName = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  text-align: center;
  margin-top: -100px;
  /* background: green; */
  a {
    font-size: 30px;
    font-weight: 600;
    font-weight: 800;
    padding: 5px 15px;
  }

  @media (max-width: 950px) {
    display: none;
    grid-column: 1 / -1;
    text-align: left;
    margin-top: -40px;
    a {
      line-height: 100px;
      font-size: 30px;
      font-weight: 600;
      padding: 5px 5px;
    }
  }

  @media (max-width: 500px) {
    grid-column: 1 / -1;
    grid-row: 1;
    margin-top: -0px;
    a {
      line-height: 60px;
      font-size: 30px;
      margin-left: 0px;
      font-weight: 600;
    }
  };
`;
const NavBox = styled.div`
  height: 60px;
  min-height: 60px;
  margin: 0 auto;
`;

// This constrol the soical Links

const LinkSocial = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 2;
  display: flex;
  justify-content: space-around;
  /* background: ${props => props.theme.darkGrey}; */
  .indiv-box {
    width: 80px;
    margin: 0px 5px;
    a {
      line-height: 80px;
      border-radius: 0px;
      padding: 30px 0;
      font-size: 12px;
    }
  }
  @media (max-width: 950px) {
    grid-column: 1 / -1;
     grid-row-start: 3;
     justify-content: end;
     height: 80px;
  };

  @media (max-width: 450px) {
    grid-column: 1 / -1;
    grid-row-start: 3;
};
`;

const Logo = styled.img`
  height: 60px;
  margin-top: 120px;
  margin-left: 20px;
  transition: 0.25s ease-in-out;
  padding: 5px;
  :hover {
  transition: 0.25s ease-in-out;
    background: #ff7000;
  }
`;



export default NavStyles;

export {LinkSocial, NavBox, LinkBox, LinkName, Logo };
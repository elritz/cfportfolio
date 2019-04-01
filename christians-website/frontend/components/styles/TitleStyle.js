import styled from 'styled-components'

const TopTitleStyle = styled.div`
    position: absolute;
    top: 75vh;
    left: 0; right: 0;
    width: 70%;
    font-size: 95px;
    font-weight: 900;
    padding: 0px 50px;
    text-align: right;
    border-radius:  0px 50px 20px 0px ;
    transform: skew(10deg);
    margin-left: -40px; margin-top: 30vh;
    color: ${props => props.theme.LightWhite};
    text-shadow: 1px 0px rgba(0, 0, 0, 0.5) ;
    text-decoration: underline;
    white-space: normal; 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -100px -100px;
    background-position: fixed;
    background-image: url('https://images.unsplash.com/photo-1428452932365-4e7e1c4b0987?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fca2af401771121bf09690caeba861ad&auto=format&fit=crop&w=1950&q=80');
    u { 
    background: red;
    padding:3px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    border-radius: 0px ;
    text-align: center;
    font-weight: 900;
    transform: skew(0deg);
    margin-left: 0px;
    padding: 0px 30px;
    background-repeat: no-repeat;
    background-size:  cover;
    background-position: 0px -170px;
    background-position: fixed;
  };
  @media (max-width: 850px) {
    width: 100%;
    border-radius:  0px ;
    text-align: center;
    font-size: 75px;
    font-weight: 900;
    padding: 0px 30px;
    background-repeat: no-repeat;
    background-size: 1000px 1000px;
    background-position: 0px 0px;
    background-position: fixed;
  };
`;

const SecondTitleStyle = styled.div`
  width: 90%;
  font-size: 95px;
  font-weight: 900;
  padding: 0px 50px;
  text-align: right;
  border-radius:  0px 50px 20px 0px ;
  color:white;
  text-decoration: underline;
  white-space: normal; 
  background: ${props => props.theme.darkGrey};
  /* u::before {
    content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
  } */
  u { 
    padding:3px;
    background: red;
  }
  @media (max-width: 850px) {
  border-radius:  0px 60px 20px 0px ;
  font-size: 65px;
  font-weight: 900;
  padding: 0px 30px;
  };
  @media (max-width: 500px) {
    width: 100%;
  border-radius:  0px ;
  text-align: center;
  font-size: 75px;
  font-weight: 900;
  padding: 0px 30px;
  };
`;

const PageTitle = styled.div`
  position: absolute;
  top: 15vh;
  width: 70%;
  left: 0; right: 0;
  padding: 0 15px;
  z-index: 0;
  font-size: 100px;
  font-weight: 800;
  color: white;
  color: ${props => props.theme.LightWhite};
  text-shadow: 1px 0px rgba(0, 0, 0, 0.5) ;
  text-decoration: underline;
  white-space: normal; 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -100px -100px;
  background-position: fixed;
  background-image: url('https://images.unsplash.com/photo-1428452932365-4e7e1c4b0987?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fca2af401771121bf09690caeba861ad&auto=format&fit=crop&w=1950&q=80');
  text-align: center;
    u { 
    background: red;
    padding:3px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    border-radius: 0px ;
    text-align: center;
    font-weight: 900;
    transform: skew(0deg);
    margin-left: 0px;
    padding: 0px 30px;
    background-repeat: no-repeat;
    background-size:  cover;
    background-position: 0px -170px;
    background-position: fixed;
  };
  @media (max-width: 850px) {
    top: 18vh;
    width: 100%;
    border-radius:  0px ;
    font-size: 75px;
    font-weight: 900;
    padding: 0px 30px;
    background-repeat: no-repeat;
    background-size: 1000px 1000px;
    background-position: 0px 0px;
    background-position: fixed;
  };
`;

export { TopTitleStyle, PageTitle};
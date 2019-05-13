import React, { Component } from 'react'
import styled from 'styled-components';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
}
Router.onRouteChangeError = () => {
    NProgress.done()
}

const HeaderStyles = styled.div`
  transform: skew(0deg, -7deg);
  position: absolute;
  top: 0px; left: 0; right: 0;
  background: #262626;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 1px #ff7000;
  z-index: 15;
  min-height: 300px;
  a{
    color: white;
    font-weight: 400;
  }
  @media (max-width: 1500px) {
    height: 60vh;
  };
  @media (max-width:950px) {
    height: 60vh;
    background-position: 0px 0px;
  };
  @media (max-width:500px) {
    height: 80vh;
    background-position: 0px 50px;
    box-shadow: 0px 20px #ff7000;
  };
`;
const InsideWrapper = styled.div`
    margin: 0 auto;
    position: absolute;
    top: 0px; left: 0; right: 0;
    transform: skew(0deg, 7deg) translateY(0);
`;


class Header extends Component {
  render() {
    return (
      <HeaderStyles>
        <InsideWrapper>
          <Nav />
        </InsideWrapper>
      </HeaderStyles>
    )
  }
}



export default Header;
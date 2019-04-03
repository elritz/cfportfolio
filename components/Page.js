import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Nav from '../components/Nav';
import Meta from '../components/Meta';
import StickyNav from './StickyNav';

const theme = {
  red: '#FF0000',
  black: '#181818',
  grey: '#3A3A3A',
  darkGrey: '#262626',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  LightWhite: '#EDEDED',
  orange: '#FF7000',
  maxWidth: '85vw',
  mobileWidth: '1000px',
  bs: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};
const StylePage = styled.div`
  color: ${props => props.theme.offWhite};
`;
const Inner = styled.div`
  max-width:100vw;
  margin-top: 2%;
  @media (max-width: 850px ) {
  max-width:100vw;
  margin: 0;
  margin-top: 2%;
  };
`;

injectGlobal`
@font-face {
  font-family: 'Roboto', sans-serif;
  src: url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900");
  /* font-weight: normal; */
  font-style: normal;
}
  html {
    box-sizing: border-box;
    font-size: 10px;
    }
    * , *:before, *:after {
      box-sizing: inherit;
      /* color: ${theme.offWhite}; */
    }
    body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
      font-family: 'Roboto';
      /* Control background to the page */
      /* background: ${theme.black}; */
      background: #044D3A;
      ::-webkit-scrollbar { 
    display: none; 
}
    }
    a {
      text-decoration: none;
      color: ${theme.offWhite};
    }
`;
export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StylePage>
          <Meta />
          <Nav />
          <Inner>{this.props.children}</Inner>
        </StylePage>
      </ThemeProvider>
    );
  }
};
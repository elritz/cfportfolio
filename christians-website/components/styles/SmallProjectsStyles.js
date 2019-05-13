import styled from 'styled-components';

const SmallStyles = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  color: ${props => props.theme.LightWhite};
  @media (max-width: 500px) {
    display: none;
  };
  .sp-item {
    margin: 1px 0;
    border-radius: 7px;
    box-shadow: ${props => props.theme.bs};
  }

  .sp-style:hover {
    animation-duration: 1s;
    background: #ff7000;
  }
  .sp-style{
    display: grid;
    margin: 1px 0;
    height: 115px;
    border-radius: 2px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 45px 55px;
    background: white;

    .sp-title{
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
      height: 35px;
      margin-left: 10vw;
      font-size: 2rem;
      font-weight: 600;
      /* background: red; */
    }
    .sp-description{
      grid-row-start: 2;
      grid-column-start: 1;
      grid-column-end: 6;
      height: 53px;
      margin-top: 5px;
      margin-left: 5vw;
      overflow: hidden;
      /* background: red; */
    }
    .sp-link{
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 7;
      grid-column-end: 6;
      height: 115px;
      margin-right: 0vw;
      line-height: 95px;
      overflow-y: hidden;
      text-align: center;
      overflow-x: hidden;
      /* background: red; */
    }
    a {
      padding: 7px 25px;
      transition: 0.2s ease-in-out;
      transition-delay: 4s ease;
      /* background: green; */
    }
    a:hover {
      transition: 0.45s ease-in-out;
      background: ${props => props.theme.offWhite};
    }
  }
`;

export default SmallStyles;
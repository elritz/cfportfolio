import styled from 'styled-components'

const icon = '../../../static/images/BarfriendsApp/barfriendsIcon.svg';


const BarfriendsTwo = () => (
  <OuterBox>
    <Icon src={icon} alt=""/>
  </OuterBox>
);


const OuterBox = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%; height: 100vh;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
  };
`;

 const Icon = styled.img`
  grid-column: 1 / -1;
  grid-row: 2;
  margin-left: 50%;
  transform: translateX(-50%);
  height: 150px;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 1 / -1;
  }
`;
export default BarfriendsTwo;


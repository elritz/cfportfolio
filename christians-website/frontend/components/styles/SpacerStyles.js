import styled from 'styled-components';


const SpacerDiv = styled.div`
  height: 35vh;
  width: 3px;
  margin-top: 105px;
  margin-bottom: 55px;
  border-radius: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme.offWhite};
  content: '';
`;


export default SpacerDiv;
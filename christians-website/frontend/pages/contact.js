import styled from 'styled-components';
import Contacts from '../components/Contacts';

const PageGrid = styled.div`
  color: black;
  margin-top: 50vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 40px;
`;

const Para = styled.h1`
  text-align: center;
  font-weight: 200;
  font-size: 50px;
  color: white;
  width: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
`;
const Contact = () => (
  <PageGrid>
    <Para>Get in touch</Para>
    <Contacts />
  </PageGrid>
);
export default Contact;
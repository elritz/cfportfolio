import styled from 'styled-components';
import Head from 'next/head';
// "../../static/images/BarfriendsApp/barApp.svg"

const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px;
  height: 100px;
  width: 90%;
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 100px;
  };
`;

const ContactCard = styled.img`
  height: 70px; width: 70px;
  margin-left: 50%;
  transform: translateX(-50%);
  /* background: blue; */
`;
const GithubBox = styled.div`
  background: red;
`;

const Contacts = () => (
    <div>
      <Head>
        <title>CF | Contact</title>
      </Head>
      <ContactBox>
       <a href="mailto:christian@barfriends.net?Subject=From%Christian%Firmi%Website" target="_blank"><ContactCard src="../../static/images/Contact/email.svg" alt="use email Christian Firmi"/></a>
       <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=christian@barfriends.net" target="_blank"><ContactCard src="../../static/images/Contact/gmail.svg" alt="use gmail Christian Firmi"/></a>
       <a href="https://www.instagram.com/cfirmi/" target="_blank"><ContactCard src="../../static/images/Contact/instagram.svg" alt="Christian Firmi on Instagram"/></a>
       <a href="https://github.com/cfirmi" target="_blank"><ContactCard src="../../static/images/Contact/github-logo.svg" alt="Christian Firmi on Github"/></a>
      </ContactBox>
    </div>

);

export default Contacts;
import styled, { keyframes } from 'styled-components'
import Current from './Current'

const profilepic = '../../static/images/AboutMe/selfie.jpg'

// icons
const github = '../../static/images/socialmedia/githubIcon.svg'
const insta = '../../static/images/socialmedia/instagramIcon.svg'
const gmail = '../../static/images/socialmedia/gmailIcon.svg'
//Test edit for new repo
const Outerbox = styled.div`
  background-image: url('../../static/images/AboutMe/extraLines.svg');
  background-size: 100%;
  position: absolute;
  top: 105px; right: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 120px 90px 60px 60px 60px;
  min-height: 550px; height: 56vh;
  width: 100vw;
  @media (max-width: 1000px) {
    top: 105px;
    min-height: 550px; height: 75vh;
    grid-template-rows: 100px 120px 100px 100px 70px 100px;
  };
`;

const ProfileImage = styled.img`
  grid-column: 2 / 4;
  grid-row: 1 / 6;
  border-radius: 0px 0px 25px 25px;
  margin-left: 90px;
  height: 100%; width: 100%;
  min-width: 500px;
  object-fit: cover;
  @media (max-width: 1400px) {
    grid-column: 1 / 4;
    grid-row: 1 / -1;
  };
  @media (max-width: 1145px) {
    margin-left: 60px;
  };
  @media (max-width: 1000px) {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    margin-left: 0px;
    border-radius: 0px;
  };
  @media (max-width: 500px) {
    overflow-x: hidden;
  };
`;

const ProfileName = styled.div`
  grid-row: 2;
  grid-column: 5 / -1;
  color: #FF7000;
  width: 100%; height: 100%;
  font-size: 100px;
  font-weight: 800;
  text-align: left;
  line-height: 88px;
  @media (max-width: 1400px) {
    font-size: 70px;
    grid-column: 5 / -1;
    grid-row: 3;
  };
  @media (max-width: 1000px) {
    grid-column: 2 / -1;
    grid-row: 3;
    font-size: 80px;
  };
  @media (max-width: 500px) {
    grid-column: 1 / -1;
    grid-row: 3;
    font-size: 80px;
  };
`;
const ProfilePosition = styled.div`
  background: #FF7000;
  color: ${props => props.theme.white};
  border-radius: 30px 0px 0px 30px;
  grid-column: 5 / -1;
  grid-row: 4;
  padding-left: 15px;
  font-size: 17px;
  font-weight: 400;
  line-height: 45px;
  text-align: left;
  -webkit-box-shadow: -1px -2px 5px 2px rgba(26,26,26,.4);
  -moz-box-shadow: -1px -2px 5px 2px rgba(26,26,26,.4);
  box-shadow: -1px -2px 5px 2px rgba(26,26,26,.4);
  @media (max-width: 1400px) {
    padding-left: 0px;
    grid-column: 1 / -1;
    grid-row: 8;
    border-radius: 0;
    height: 60px;
    font-size: 21px;
    line-height: 60px;
    text-align: center;
  };
  @media (max-width: 1000px) {
    grid-row: 7;
  };
  @media (max-width: 600px) {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 13px;
    letter-spacing: 1px;
  };
`;
 const ContactBox = styled.div`
  grid-column: 1 / -1;
  grid-row: -1;
  margin-top: 85px;
  width: 300px;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 20px;
  @media (max-width: 1400px) {
    grid-column: 3 / 5;
    grid-row: 9;
  };
  @media (max-width: 1000px) {
    padding: 50px;
    grid-column: 1 / -1;
    max-width: 500px;
    margin-left: 50%;
    transform: translateX(-50%);
    grid-row: 7;
    margin-top: 45px;
  };
  @media (max-width: 800px) {
    grid-row: 7;
  };
`;
 const Item = styled.div`
  grid-row: 1 / -1; 

  img {
    margin-top: 0px;
    width: 45px;
    transition: all 0.3s ease;
  }
`;


const Profile = () => (
  <div>
    <Outerbox>
      <ProfileImage src={profilepic} alt=""/>
        <ProfileName>
          Hey, <br/> I'm Christian
        </ProfileName>
      <ProfilePosition>JUNIOR FULL STACK WEB DEVELOPER <span style={{ lineHeight: '55px', fontSize: '28px', fontWeight: '200'}}> & </span> UI/UX DESIGNER</ProfilePosition>
      <ContactBox>
        <a href="mailto:christian@barfriends.net?Subject=From%Christian%Firmi%Website">
          <Item>
            <img id="icon" src={gmail} alt=""/>
          </Item>
        </a>
        <a target="_blank" href="https://github.com/cfirmi">
          <Item>
            <img src={github} alt=""/>
          </Item>
        </a>
      </ContactBox>
    </Outerbox>
    <Current />
  </div>

);
export default Profile;
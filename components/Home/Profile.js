import styled, { keyframes } from 'styled-components'

const profilepic = '../../static/images/AboutMe/trio.jpg'

// icons
const github = '../../static/images/socialmedia/githubIcon.svg'
const insta = '../../static/images/socialmedia/instagramIcon.svg'
const gmail = '../../static/images/socialmedia/gmailIcon.svg'

const Outerbox = styled.div`
  /* background: ${props => props.theme.orange}; */
  position: absolute;
  top: 100px; right: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 120px 90px 60px 60px;
  min-height: 550px; height: 56vh;
  width: 100vw;
  @media (max-width: 1000px) {
    top: 140px;
    min-height: 550px; height: 75vh;
    grid-template-rows: 100px 120px 100px 100px 70px 100px;
  };
`;

const ProfileImage = styled.img`
  grid-column: 3;
  grid-row: 3;
  justify-self: end;
  border-radius: 25px;
  height: 250px; width: 250px;
  margin-right: 16px; 
  object-fit: cover;
  @media (max-width: 1400px) {
    height: 160px; width: 160px;
    grid-column: 2;
  };
  @media (max-width: 800px) {
    grid-row: 2;
    grid-column: 2;
    margin-top: -40px;
  };

  
`;

const ProfileName = styled.div`
  grid-row: 3;
  grid-column: 4 / -1;
  color: black;
  width: 100%; height: 100%;
  font-size: 90px;
  font-weight: 800;
  text-align: left;
  line-height: 78px;
  @media (max-width: 1400px) {
    grid-column: 3 / -1;
  };
  @media (max-width: 800px) {
    grid-column: 2 / -1;
    font-size: 60px;
  };
`;
const ProfilePosition = styled.div`
  background: #FF7000;
  color: ${props => props.theme.white};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  overflow: hidden;
  grid-column: 4 / -1;
  grid-row: 5;
  margin-left: 5px;
  padding-left: 15px;
  font-size: 17px;
  font-weight: 400;
  line-height: 45px;
  text-align: left;
  @media (max-width: 1400px) {
    grid-column: 1 / -1;
    grid-row: 4;
    height: 60px;
    font-size: 21px;
    line-height: 60px;
    text-align: center;
    margin-left: 0px;
    margin-top: 80px;
  };
  @media (max-width: 500px) {
    /* display: none; */
    text-align: center;
    font-size: 13px;
    letter-spacing: 1px;
  };
`;
 const ContactBox = styled.div`
  grid-column: 4 / 5;
  grid-row: 6 / 7;
  display: flex;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 20px;
  margin-top: 15px;
  @media (max-width: 1400px) {
    grid-column: 3 / 5;
    grid-row: 7;
  };
  @media (max-width: 1000px) {
    padding: 50px;
    grid-column: 1 / -1;
    max-width: 500px;
    margin-left: 50%;
    transform: translateX(-50%);
    grid-row: 5;
    margin-top: 45px;
  };
`;
 const Item = styled.div`
  grid-row: 1 / -1; 

  img {
    margin-top: 0px;
    width: 34px;
    transition: all 0.3s ease;
  }
`;


const Profile = () => (
  <Outerbox>
    <ProfileImage src={profilepic} alt=""/>
      <ProfileName>
        Hey, <br/> I'm Christian
      </ProfileName>
    <ProfilePosition>A JUNIOR FULL STACK WEB DEVELOPER <span style={{ lineHeight: '55px', fontSize: '18px', fontWeight: '200'}}> & </span>DESIGNER</ProfilePosition>
    <ContactBox>
      <a href="mailto:christian@barfriends.net?Subject=From%Christian%Firmi%Website">
        <Item>
          <img id="icon" src={gmail} alt=""/>
        </Item>
      </a>
      {/* <a target="_blank" href="https://www.instagram.com/cfirmi/">
        <Item>
          <img src={insta} alt=""/>
        </Item>
      </a> */}
      <a target="_blank" href="https://github.com/cfirmi">
        <Item>
          <img src={github} alt=""/>
        </Item>
      </a>
    </ContactBox>
  </Outerbox>

);
export default Profile;
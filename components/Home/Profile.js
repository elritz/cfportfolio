import styled, { keyframes } from 'styled-components'

const profilepic = '../../static/images/AboutMe/profilefake.jpg'

// icons
const github = '../../static/images/socialmedia/githubIcon.svg'
const insta = '../../static/images/socialmedia/instagramIcon.svg'
const gmail = '../../static/images/socialmedia/gmailIcon.svg'

const Outerbox = styled.div`
  background: ${props => props.theme.orange};
  display: grid;
  position: absolute;
  top: 15vh; right: 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 120px 90px 60px 60px;
  min-height: 550px; height: 56vh; width: 100vw;
`;

const ProfileImage = styled.img`
  grid-column: 3;
  grid-row: 3;
  justify-self: end;
  border-radius: 75px;
  height: 150px; width: 150px;
  margin-top: 15px; 
  object-fit: cover;
  
`;

const ProfileName = styled.div`
  font-size: 90px;
  font-weight: 800;
  line-height: 83px;
  text-align: left;
  grid-row: 3;
  grid-column: 4 / -1;
  width: 100%; height: 100%;
  /* color: transparent; */
`;
const ProfilePosition = styled.div`
  background: white;
  overflow: hidden;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  grid-column: 4 / -1;
  grid-row: 5;
  font-size: 17px;
  font-weight: 400;
  line-height: 45px;
  text-align: left;
  color: ${props => props.theme.orange};
  margin-top: 10px;
  padding-left: 10px;
`;
 const ContactBox = styled.div`
  grid-column: 4 / 6;
  grid-row: 6 / 7;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 20px;
`;
 const Item = styled.div`
  grid-row: 1 / -1; 
  img {
    margin-top: 0px;
    width: 34px;
    transition: all 0.3s ease;
  }
`;
const Message = styled.div`
  grid-column: 1 / -1; 
  grid-row: 8;
  width: 80vw;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
`;

const Profile = () => (
  <Outerbox>
    <ProfileImage src={profilepic} alt=""/>
      <ProfileName>
        Hey, <br/> I'm Christian
      </ProfileName>
    <ProfilePosition>A WEB/MOBILE DEVELOPER <span style={{ lineHeight: '55px', fontSize: '18px', fontWeight: '800'}}> & </span> DIGITAL DESIGNER</ProfilePosition>
    <ContactBox>
      <a href="mailto:christian@barfriends.net?Subject=From%Christian%Firmi%Website">
        <Item>
          <img id="icon" src={gmail} alt=""/>
        </Item>
      </a>
      <a target="_blank" href="https://www.instagram.com/cfirmi/">
        <Item>
          <img src={insta} alt=""/>
        </Item>
      </a>
      <a target="_blank" href="https://github.com/cfirmi">
        <Item>
          <img src={github} alt=""/>
        </Item>
      </a>
    </ContactBox>
  </Outerbox>

);
export default Profile;
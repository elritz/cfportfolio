import styled from 'styled-components'

const Icon = '../../../static/images/BarfriendsApp/barfriendsIcon.svg';
const Label = '../../../static/images/BarfriendsApp/barfriendsLabel.svg';
const IOS = '../../../static/images/BarfriendsApp/barfriendsIOS.svg';
const Iphone = '../../../static/images/BarfriendsApp/iphoneBlue.png';
const ScreenRecord = '../../../static/images/BarfriendsApp/screenrecord.MP4';
const Cycle = '../../../static/images/BarfriendsApp/barfriendsCycle.svg';


const BarfriendsOne = () => (
  <OuterBox>
    <AllBarfriends>
      <IconImage src={Icon} alt=""/>
      <LabelImage src={Label} alt=""/>
      <Message>Cheers To Better Nights.</Message>
      <IOSImage src={IOS} alt=""/>
    </AllBarfriends>
    <PhoneImage src={Iphone} alt=""/>
    <VideoBox 
      autoPlay="true"
      // controls
      muted
      loop
      src={ScreenRecord}>
    </VideoBox>
    <CycleImage src={Cycle} alt=""/>
    <About> <a target="_blank" href="https://barfriends.app/">barfriends.com</a></About>
  </OuterBox>
);


const OuterBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 50px 50px 100px;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-template-rows: 100px 100px 100px 100px 100px 50px 50px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px;
  };
`;

 const AllBarfriends = styled.div`
  background: 181818;
  box-shadow: ${props => props.theme.bs};
  padding: 50px;
  height: 100%;
  grid-row: 2 / 8;
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
  grid-template-rows: 100px 100px 90px 150px 100px;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 1 / -1;
  };
`;
 const IconImage = styled.img`
  grid-column: 2;
  grid-row: 1;
  margin-left: 50%;
  transform: translateX(-50%);
  height: 110px;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 1 / -1;
  }
`;
 const Message = styled.p`
  text-align: center;
  font-size: 26px;
  grid-column: 1 / -1;
  grid-row: 3;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 1 / -1;
  }
  @media (max-width: 600px) {
    margin-top: 0px;
  };
`;
const LabelImage = styled.img`
  grid-column: 2;
  grid-row: 2;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  height: 100px;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 1 / -1;
  }
  @media (max-width: 600px) {
    height: 70px;
  };
`;
const IOSImage = styled.img`
  grid-column: 2;
  grid-row: 4;
  margin-top: 10px; margin-left: 50%;
  transform: translateX(-50%);
  height: 100px;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 1 / -1;
  }
`;
 const PhoneImage = styled.img`
  margin-top: -40px; 
  width: 300px;
  grid-column: 4;
  z-index: 2;
  justify-self: center;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
  grid-column: 1 / -1;
   grid-row: 8; 
   margin-top: 60px;
  }
`;
const VideoBox = styled.video`
  margin-top: 80px; 
  width: 255px;
  justify-self: center;
  grid-row: 1;
  grid-column: 4;
  border-radius: 25px;
  z-index: 1;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 1 / -1;
    grid-row: 8; 
  }
`;
 const CycleImage = styled.img`
  margin-top: 40px; 
  width: 100%;
  max-width: 600px;
  grid-column: 1 / -1;
  grid-row: 12; 
  z-index: 2;
  justify-self: center;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
  grid-column: 1 / -1;
   grid-row: 15; 
   margin-top: 60px;
  }
`;
 const About = styled.p`
 grid-row: 13;
 grid-column: 1 / -1;
 text-align: center;
 font-size: 70px;
 padding: 0px 50px;
 a {
 transition: 0.45s ease-in-out;
 padding: 20px;
 }
 a:hover {
   background: #FF7000;
 }
 @media (max-width: ${props => props.theme.mobileWidth} ) {
   grid-row: -1; 
  }
  @media (max-width: 600px) {
    padding: 0px;
    font-size: 50px;
    a {padding: 0px;}
  };
`;
export default BarfriendsOne;


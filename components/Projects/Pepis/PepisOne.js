import styled from 'styled-components'
import Features from './PepisFeatures'

const Logo = '../../../static/images/Pepis/pepisLogo.svg';
const Label = '../../../static/images/Pepis/pepisLabel.svg';

const profile = '../../../static/images/Pepis/Features/createprofile.svg';
const findpepis = '../../../static/images/Pepis/Features/findpepis.svg';
const deliver = '../../../static/images/Pepis/Features/deliver.svg';
const design = '../../../static/images/Pepis/Features/design.svg';
const photos = '../../../static/images/Pepis/Features/photos.png';


const PepisOne = () => (
  <OuterBox>
    <PepisLogo src={Logo} alt=""/>
    <PepisLabel src={Label} alt=""/>
    <PepisLink>
      <a target="_blank" href="https://www.pepispizza.com">
        pepispizza.com
      </a>
    </PepisLink>
    <PepisFeatures>
      <HowToItem>
        <ImgBox draggable="false" src={profile} alt=""/>
        <TextBox>
          <Title>Creating A Profile</Title>
          <Text>Customers can go onto the website create an account so they can order and pay online.</Text>
        </TextBox>
      </HowToItem>
      <HowToItem>
        <ImgBox draggable="false" src={findpepis} alt=""/>
        <TextBox>
          <Title>Finding A Pepis</Title>
          <Text>Users can see on a custom map where the closest Pepi's is to them and see more details about each place.</Text>
        </TextBox>
      </HowToItem>
      <HowToItem>
        <ImgBox draggable="false" src={deliver} alt=""/>
        <TextBox>
          <Title>Door Dash</Title>
          <Text>Pepi's uses Door Dash and I put the DoorDash button so that customers can use their platform if they are more comfortable with it.</Text>
        </TextBox>
      </HowToItem>
      <HowToItem>
        <ImgBox draggable="false" src={design} alt=""/>
        <TextBox>
          <Title>Designer and Developer</Title>
          <Text>I remade logos, labels, and any other symbol they used to represent their business, so they can have great images for promotion.</Text>
        </TextBox>
      </HowToItem>
      <HowToItem>
        <ImgBox draggable="false" src={photos} alt=""/>
        <TextBox>
          <Title>Pictures You See</Title>
          <Text>I photographed their products to showcase how amazing the product is. I staged the products in a natural lightbox, this gives a calmness to the product, this was to counter the darker theme of the website.</Text>
        </TextBox>
      </HowToItem>
    </PepisFeatures>
  </OuterBox>
);

export default PepisOne;



const OuterBox = styled.div`
  margin-top: 100px;
  /* background: green; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
  grid-template-rows: 100px 100px 100px 100px 100px 1fr 1fr 1fr;
  height: 150vh;
  
`;
const PepisLogo = styled.img`
  height: 150px;
  grid-row: 2;
  grid-column: 1 / -1;
  margin-left: 50%;
  transform: translateX(-50%);
`;
const PepisLabel = styled.img`
  height: 125px;
  grid-row: 3;
  grid-column: 1 / -1;
  margin-top: 30px; margin-left: 50%;
  transform: translateX(-50%);
`;
const PepisLink = styled.div`
  grid-column: 1 / -1;
  grid-row: 5;
  font-size: 80px;
  line-height: 80px;
  text-align: center;
  a {
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: 0.35s ease-in-out;
  }
  :hover {
    a {
    transition: 0.35s ease-in-out;
    text-decoration-color: #FF8000;
    }
  }
`;

const PepisFeatures = styled.div`
  grid-column: 1 / -1;
  grid-row: 7;
`;

const HowToItem = styled.div`
  /* background: blue; */
  display: grid;
  grid-template-columns: 10px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column: 2 / 8;
  /* max-width: 1200px; */
  /* width: 1000px;  */
  width: 90%;
  height: 160px;
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: ${props => props.theme.mobileWidth}) {
    grid-template-columns: 195px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 10px;
  }
  @media (max-width: 800px) {
    grid-column: 1 / -1;
    overflow: hidden;
    height: 550px;
    width: 80%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 350px 100px;
  };
`;
const ImgBox = styled.img`
  /* background: green; */
  height: 145px;
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  @media (max-width: 800px) {
    margin-left: 50%;
    transform: translateX(-50%);
    width: 100vw; height: 390px;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;
const TextBox = styled.div`
  /* background: yellow; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  margin-left: 150px;
  grid-column: 3 / 8;
  grid-row: 1 / -1;

  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 2 / 8;
    grid-template-rows: 35px 1fr;
  };
  @media (max-width: 800px) {
    /* background: yellow; */
    margin-left: 0%;
    margin-top: 33px;
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
  }
`;
const Title = styled.h2`
  /* background: pink; */
  font-size: 20px;
  font-weight: 600;
  line-height: 1px;
  margin-top: 20px;
  color: white;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
    @media (max-width: 800px) {
      margin-top: 20px;
    };
`;
const Text = styled.div`
  /* background: orange; */
  line-height: 35px;
  font-size: 18px;
  font-weight: 300;
  color: white;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  a {
    color: white;
    ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  }
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    line-height: 25px;
    font-size: 15px;
  };
  @media (max-width:800px ) {
    line-height: 25px;
    font-size: 18px;
  };
`;
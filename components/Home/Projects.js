import styled from 'styled-components'
import Link from 'next/link'
//Barfriends
const icon = '../../static/images/Projects/app/icon.svg'
const label = '../../static/images/Projects/app/label.svg'
const moto = '../../static/images/Projects/app/moto.svg'
const appstore = '../../static/images/Projects/app/appstore.svg'
const image = '../../static/images/Projects/app/image.png'
//pepis
const picon = '../../static/images/Projects/pepis/picon.svg'
const plabel = '../../static/images/Projects/pepis/plabel.svg'
const pmoto = '../../static/images/Projects/pepis/pmoto.svg'
const imagexlg = '../../static/images/Projects/pepis/imagexlg.png'
const imagelg = '../../static/images/Projects/pepis/imagelg.png'
const image2 = '../../static/images/Projects/pepis/image2.png'
const image3 = '../../static/images/Projects/pepis/image3.png'


const Outerbox = styled.div`
  background: white;
  position: absolute;
  left: 0px; right: 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px 500px 600px 600px;
  height: 180vh;
  min-height: 1600px;
  margin-top: 1000px;
  @media (max-width: 1400px) {
    margin-top: 1500px;
  };
  img {
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .projects {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    font-size: 45px;
    font-weight: 700;
    text-align: center;
    color: black;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.orange};
    @media (max-width: 1400px) {
      font-size: 65px;
    };
  }
  .pepissite {
    position: absolute;
    grid-row: 3;
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 100px;
    @media (max-width: 1400px) {
      left: 0px; right: 0px;
      grid-template-rows: 100px 100px 100px 100px 100px 100px 50px 100px;
    };
    @media (min-width: 100px) {
      left: 0px; right: 0px;
    };
    .icon {
      grid-column: 5 / -1;
      grid-row: 2;
      @media (max-width: 1400px) {
        grid-column: 1 / -1;
      };
    }
    .label {
      grid-column: 5 / -1;
      grid-row: 3;
      margin-top: 50px;
      @media (max-width: 1400px) {
        grid-column: 1 / -1;
        max-width: 700px;
        width: 90vw;
      };
    }
    .moto {
      grid-column: 5 / -1;
      grid-row: 5;
      @media (max-width: 1400px) {
        grid-column: 1 / -1;
        width: 60vw;
        max-width: 400px;
      };
      @media (max-width: 650px) {
        width: 80vw;
        margin-top: -40px;
      };
    }
    .imagelg {
      margin-top: 45px;
      grid-column: 6 / 8 ;
      grid-row: 5;
      @media (max-width: 1400px) {
        grid-column: 3 / 7;
      };
    }
    .image2 {
      margin-top: 85px;
      grid-column: 5;
      grid-row: 5;
      margin-right: 15px;
      @media (max-width: 1400px) {
        grid-column: 2;
      };
      @media (max-width: 650px) {
        display: none;
      };
    }
    .image3 {
      margin-top: 85px;
      grid-column: 8;
      grid-row: 5;
      margin-right: 15px;
      @media (max-width: 1400px) {
        grid-column: 7;
      };
      @media (max-width: 650px) {
        display: none;
      };
    }

    .imagexlg {
      max-width: 600px;
      grid-column: 2 / 4;
      grid-row: 1 / 5;
      margin-top: 140px;
      @media (max-width: 1400px) {
        display: none;
      };
    }
  }
  .barfriendsapp {
    position: absolute;
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px 100px 100px 150px;
    @media (max-width: 1400px) {
      left: 0px; right: 0px;
    };
    .icon {
      grid-column: 1 / 5;
      grid-row: 2;
      @media (max-width: 1400px) {
        grid-column: 1 / -1;
        margin-left: 50%;
      };
    }
    .label {
      grid-column: 1 / 5;
      grid-row: 3;
      @media (max-width: 1400px) {
        grid-column: 1 / -1;
        width: 90vw;
        max-width: 500px;
      };
    }
    .moto {
      grid-column: 1 / 5;
      grid-row: 4;
      @media (max-width: 1400px) {
        margin-top: -20px;
        grid-column: 1 / -1;
        max-width: 350px;
      };
    }
    .appstore {
      grid-column: 1 / 5;
      grid-row: 4;
      margin-top: 40px;
      @media (max-width: 1400px) {
        grid-column: 1 / -1;
        margin-top:20px;
        max-width: 250px;
      };
    }
    .image {
      grid-column: 5 / -1;
      grid-row: 1 / 5;
      margin-top: 40px;
      max-width: 600px;
      @media (max-width: 1400px) {
        display: none;
      };
    }
  }

`;
 const ProjectItem = styled.div`
  margin-top: 100px;
`;
 const BarfriendsLink = styled.div`
  background: ${props => props.theme.orange};
  box-shadow: ${props => props.theme.bs};
  grid-column: 3;
  grid-row: 6 / 7;
  height: 50px;
  transform: skew(-20deg);
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  min-width: 200px;
  max-width: 200px;
  a {
    /* color: #044D3A; */
    color: white;
  }
  @media (max-width: 1400px) {
    grid-row: 5;
    grid-column: 1 / -1;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
  };
 `;
 
 const PepisLink = styled.div`
  background: ${props => props.theme.orange};
  box-shadow: ${props => props.theme.bs};
  grid-column: 3;
  grid-row: 8;
  height: 50px;
  transform: skew(-20deg);
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  min-width: 200px;
  max-width: 200px;
  a {
    /* color: #044D3A; */
    color: white;
  }
 @media (max-width: 1400px) {
    grid-row: 9;
    grid-column: 1 / -1;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
  };
`;



const Projects = () => (
  <Outerbox>
    <p className="projects">Projects</p>
    <ProjectItem className="barfriendsapp">
     <img className="icon" src={icon} alt=""/>
     <img className="label" src={label} alt=""/>
     <img className="moto" src={moto} alt=""/>
     <img className="appstore" src={appstore} alt=""/>
     <img className="image" src={image} alt=""/>
     <BarfriendsLink>
       <Link href="">
       <a>
       more...
       </a>
       </Link>
     </BarfriendsLink>
    </ProjectItem>
    <ProjectItem className="pepissite">
      <img className="icon" src={picon} alt=""/>
      <img className="label" src={plabel} alt=""/>
      <img className="moto" src={pmoto} alt=""/>
      <img className="imagelg" src={imagelg} alt=""/>
      <img className="image2" src={image2} alt=""/>
      <img className="image3" src={image3} alt=""/>
      <img className="imagexlg" src={imagexlg} alt=""/>
      <PepisLink>
       <Link href="">
       <a>
       more...
       </a>
       </Link>
      </PepisLink>
    </ProjectItem>
  </Outerbox>
);
export default Projects;

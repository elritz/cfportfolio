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
  background: ${props => props.theme.white};
  position: absolute;
  left: 0px; right: 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px 500px 600px 600px;
  grid-row-gap: 100px;
  height: 180vh;
  min-height: 1950px;
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
    grid-template-rows: 100px 100px 100px 100px 100px 100px 100px 50px 50px;
    @media (max-width: 1400px) {
      left: 0px; right: 0px;
      grid-template-rows: 100px 100px 100px 100px 100px 100px 50px 100px 50px 50px;
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
      box-shadow: ${props => props.theme.bs};
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
      @media (max-width: 1000px) {
        display: none;
      };
    }
    .image3 {
      margin-top: 85px;
      grid-column: 8;
      grid-row: 5;
      margin-right: 15px;
      box-shadow: ${props => props.theme.bs};
      @media (max-width: 1400px) {
        grid-column: 7;
      };
      @media (max-width: 1000px) {
        display: none;
      };
    }

    .imagexlg {
      max-width: 600px;
      grid-column: 2 / 4;
      grid-row: 1 / 5;
      margin-top: 140px;
      box-shadow: ${props => props.theme.bs};
      @media (max-width: 1400px) {
        display: none;
      };
    }
  }
  .barfriendsapp {
    position: absolute;
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 50px; 
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
        max-width: 400px;
      @media (max-width: 1400px) {
        margin-top: -20px;
        grid-column: 1 / -1;
      };
      @media (max-width: 600px) {
        width: 90%;
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
  /* background: red */
  width: 90vw;
  margin-top: 100px;
`;
 const BarfriendsLink = styled.div`
  background: ${props => props.theme.orange};
  box-shadow: ${props => props.theme.bs};
  grid-column: 1 / -1;
  margin-left: 50%;
  transform: translateX(-50%);
  transform: skewX(10deg);
  grid-row: 9;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  min-width: 200px;
  max-width: 200px;
  margin-top: 70px;
  a {
    /* color: #044D3A; */
    color: white;
  }
  @media (max-width: 1400px) {
    grid-row: 6;
    grid-column: 1 / -1;
  };
 `;
 
 const PepisLink = styled.div`
  background: ${props => props.theme.orange};

  box-shadow: ${props => props.theme.bs};
  grid-column: 1 / -1;
  grid-row: 12;
  height: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  transform: skewX(10deg);
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  min-width: 200px;
  max-width: 200px;
  margin-top: 50px;
  a {
    /* color: #044D3A; */
    color: white;
  }
 @media (max-width: 1400px) {
    grid-row: 12;
    grid-column: 1 / -1;

    margin-top: 20px;
  };
  @media (max-width:850px) {
  margin-top: 50px;
  };
  @media (max-width: 600px) {
  margin-top: 120px;
  };
`;
 const PepisDescription = styled.div`
  grid-row: 9;
  grid-column: 1 / -1;
  padding: 0px 20px;
  font-size: 18px;
  text-align: center;
  color: black;
`;

const BarfriendsDescription = styled.div`
  grid-row: 7;
  grid-column: 1 / -1;
  padding: 0px 20px;
  font-size: 18px;
  text-align: center;
  color: black;
  margin-top: 20px;
  @media (max-width: 1400px ) {
    grid-row: 5;
  };
  @media (max-width: 1050px) {
    grid-column: 2 / 8;
  };
  @media (max-width: 740px) {
    margin-top: 0px;
    grid-column: 1 / -1;
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
     <BarfriendsDescription>
       Barfriends IOS application is built in Objective-C and migrating new files to Swift. Backend is hosting in AWS and Firebase. <br/> Project status: DEV
     </BarfriendsDescription>
     <BarfriendsLink>
       <Link href="/barfriends">
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
      <PepisDescription>
        Pepi's Pizza website is a full stack web development project. The hackend is using Node.js, GraphQL, and Prisma. Frontend is ReactJS, Next.js, Apollo, Styled Components and Jest for testing.<br/> Project status: DEV 
      </PepisDescription>
      <PepisLink>
       <Link href="/projects">
       <a>
       more...
       </a>
       </Link>
      </PepisLink>
    </ProjectItem>
  </Outerbox>
);
export default Projects;

import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const icon = '../../static/images/Works/icon.svg'
const label = '../../static/images/Works/label.svg'
const moto = '../../static/images/Works/moto.svg'
const iosdownload = '../../static/images/Works/iosdownload.svg'
const bfhistory = '../../static/images/Works/bfhistory.png'
const viewBar = '../../static/images/Works/viewbar.png'
const barmap = '../../static/images/Works/barmap.png'
const chat = '../../static/images/Works/chat.png'
const profile = '../../static/images/Works/profile.png'
const sketchicon = '../../static/images/Works/sketchicon.png'
const pannel = '../../static/images/Works/pannel.png'
const pannel2 = '../../static/images/Works/pannel2.png'
const preview = '../../static/images/Works/preview.png'
const preview2 = '../../static/images/Works/preview2.png'
const userstory = '../../static/images/Works/userstory.png'

export default class Barfriends extends Component {
  render() {
    return (
      <div style={{ background: 'black', height: '100%', width: '100vw', overflow: 'hidden' }}>
        <div>
          <br/>  
          <br/>  
          <a target='_blank' style={{color: 'white'}} href="http://barfriends.com">
          <Icon src={icon} alt="Barfriends icons"/>   
          <br/>     
          <Label src={label} alt="Barfriends label"/>  
          </a>   
          <br/>
          <Moto src={moto} alt="Barfriends motto"/>        
          <br/>
            <a href="https://itunes.apple.com/us/app/barfriends/id1445453937?ls=1&mt=8">
              <Ios src={iosdownload} alt="download Barfriends"/>  
            </a>
          <br/>
          <br/>
          <History src={bfhistory} alt="histoiry"/>  
        </div>
        <StyleComp>
          <p style={{marginLeft: '100px', fontSize: '70px', fontWeight: '800', marginBottom: '20vh', textDecoration: 'underline'}}>
            IOS Components Are Mocked In Sketch <span style={{color: '#ff7000'}}>&</span> Then Go Into Development
          </p>
          <CompGrid>
            <Mock src={viewBar} alt="view bar"/>
            <Mock src={barmap} alt=" bar map"/>
            <Mock src={profile} alt="user profile"/>
            <Mock src={chat} alt=" user chat screen"/>
          </CompGrid>
        </StyleComp>
        <Process><br/><br/>
          <p>Design Process w/ Sketch</p>
          <SketchIcon src={sketchicon} alt="sketch icon"/>
          <Pannel2 src={pannel2} alt="user login model"/>
          <Preview src={preview2} alt="new features"/>
          <p className="textbox1">Showing a Users path from login to Main Screen to Users profile. This method required a walk through and I've moved on to interative protoyping with Adobe XD and with Sketch prototyping feature.</p>
          <br/>
          <p className="textbox2" style={{textAlign: 'left'}}>
          Below is showing my process. 
          This is how I start new designing techniques, creating features like bar-ID,heatmap for populairty and bar-owner/band/DJ/Comedian users. 
          <br/>
          <br/>
           Using Sketch I design and identify problems and solutions for each feature, once I find myself starting to go back and marking a feature twice 
           I will start a new Sketch page for a single feature and I'll make that the file where I complete the design and the I start writting a implementation report.
          <br/>
          <br/>
          I start a Q&A report with Google Docs. I like Googles platform, it keeps the document editable at any moment on any device in realy time. 
          <ul >
            General:
            <li>Sketch file path:</li>
            <li>Start date:</li>
            <br/>
            Questions:
            <li> How hard is this to code? What problems will I come across (pros/cons)?</li>
            <li> What technologies should I use?</li>
            <li> What's out there that is similar? What did they do? Did it work?</li>
            <li> How will this work?</li>
            <li> How does this benifit my current users? Does it grow my user base, What is the good and bad?</li>
            <li> Is this feature the end or is it the begining? Is there more to add to make it better or is it already the best.</li>
            <li> Will this be impactful? Socially, economically.. Does this feature challenge the current or is it creating the wave?</li>
            <li> Is this the direction of the company and does the business model need adjust?</li>
            <li> What road blocks do I have? Are they career enders, lifers, stubbed toes, limps, broken bones? When faced with the a road block what is are resolutions?</li>
            <li> Who makes money from this? How much will this cost?</li>
          </ul>
          </p>
          <br/>
          <Pannel src={pannel} alt="pannel 1"/>
          <Preview src={preview} alt="Login flow"/>
          <div>
            <h1>Beautiful User Experience Tree for Developers</h1>
            <p>Even though I love this I never really used it for anything, I found this to be not what I was looking for,
               I needed a way to speak to someone. This becomes outdated and with so much on my plate there wasn't enough to do this.
                So I just talk to devs now through video recording or voice call and we fix issues together.
                 Works well inital recording setup was challenging but it's all done now.</p>
          </div>
          <Preview2 src={userstory} alt="user story"/>

        </Process>
        <Linker>
        <span>I know you're l👀king for more. Check out my <Link href="/skill"><a style={{ fontWeight: '600', color: '#FF7000'}}>Skills</a></Link> page for technologies.</span>
        </Linker>
      </div>
    )
  }
}

 

// Section 1
 const Icon = styled.img`
  height: 100px;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
 const Label = styled.img`
  height: 100px;
  width: 90vw;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
 const Moto = styled.img`
  height: 20px;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
 const Ios = styled.img`
  height: 60px;
  width: 100vw;
  margin: 20px 0px;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
 const History = styled.img`
 display: inline-block;
  max-width: 700px;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  @media (max-width: 700px) {
    width: 100vw;
  };
 `;
//Section 2
const StyleComp = styled.div`
  margin-top: 20vh;
  background-image: url('../../static/images/Works/lines.svg');
  opacity: 50%;
  transform: skew(0deg, -10deg);
`;
const CompGrid = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 50px; margin-left: 50%;
  transform: translateX(-50%) skew(0deg, 10deg);
  /* grid-auto-columns: repeat(auto); */
`;
const Mock = styled.img`
  background: #020205;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  margin-left: 50%;
  transform: translateX(-50%);
`;
//Section 3
const Process = styled.div`
background-image: url('../../static/images/Works/sketchbg.png');
background-repeat: no-repeat;
background-size: 1140px 1800px;
background-position: 50% 0%;
height: 200%;
margin-top: 25vh;
margin-bottom: 35vh;
text-align: center;
p {
  font-size: 70px;
  line-height: 50px;
}
.textbox1 {
  background: #030507;
  /* margin-top: -80px; */
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 20px; font-weight: 300; line-height: 40px;
  width: 1000px;
  color: #FCF8F8;
  border-radius: 40px 40px 40px 10px;
  padding: 50px 100px;
  -webkit-box-shadow: -1px -2px 15px 2px rgba(22,24,24,1);
  -moz-box-shadow: -1px -2px 15px 2px rgba(22,24,24,1);
  box-shadow: -1px -2px 15px 2px rgba(22,24,24,1);
  @media (max-width: 1000px) {
    border-radius: 60px;
    width: 100%;
    padding: 50px 40px;
  };
}
.textbox2 {
  background: #030507;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 20px; font-weight: 300; line-height: 40px;
  width: 100%;
  color: #FCF8F8;
  padding: 50px 100px;
  @media (max-width: 1000px) {
  margin-top: 110px;
    padding: 50px 40px;
  };
}
`;
const SketchIcon = styled.img`
position: absolute;
display: block;
height: 100px;
left: 50%;
margin-top: -50px;
transform: translateX(-50%);
z-index: 2;
`;
const Pannel = styled.img`
position: absolute;
right: 150px;
margin-top: -15px;
z-index: 2;
@media (max-width: 1000px) {
margin-top: -0px;
right: 10px;
};
`;
const Pannel2 = styled.img`
position: absolute;
left: 100px;
/* margin-top: 200px; */
z-index: 2;
@media (max-width: 1000px) {
margin-top: -0px;
left: 10px;
};
`;
const Preview = styled.img`
width: 60%;
margin-top: 150px; 
margin-left: 50%;
transform: translateX(-50%);
margin-bottom: 100px;
  .userStory {
    min-width: 100vw;
  }
`;
const Preview2 = styled.img`
width: 120%;
margin-top: 150px; 
margin-left: 50%;
transform: translateX(-50%);
margin-bottom: 100px;
`;

//Link
 const Linker = styled.div`
 text-align: center;
 margin-top: -100px;
 margin-bottom: 100px;

   font-weight: 200;
 span {
   font-size: 30px;
 }
 `;
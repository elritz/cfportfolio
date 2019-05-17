import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const icon = '../../static/images/Works/icon.svg'
const label = '../../static/images/Works/label.svg'
const moto = '../../static/images/Works/moto.svg'
const iosdownload = '../../static/images/Works/iosdownload.svg'
const bfhistory = '../../static/images/Works/bfhistory.png'
// const mock1 = '../../static/images/Works/mock1.svg'
// const mock2 = '../../static/images/Works/mock2.svg'
// const mock3 = '../../static/images/Works/mock3.svg'
const viewBar = '../../static/images/Works/viewbar.png'
const barmap = '../../static/images/Works/barmap.png'
const chat = '../../static/images/Works/chat.png'
const profile = '../../static/images/Works/profile.png'
const sketchicon = '../../static/images/Works/sketchicon.png'
const pannel = '../../static/images/Works/pannel.png'
const pannel2 = '../../static/images/Works/pannel2.png'
const preview = '../../static/images/Works/preview.png'
const preview2 = '../../static/images/Works/preview2.png'
const sketchbg = '../../static/images/Works/sketchbg.png'

export default class Barfriends extends Component {
  render() {
    return (
      <div style={{ background: 'black', height: '100%', width: '100vw', overflow: 'hidden' }}>
        <div>
          <br/>  
          <br/>  
          <a target='_blank' style={{color: 'white'}} href="http://barfriends.com">
          <Icon src={icon} alt=""/>   
          <br/>     
          <Label src={label} alt=""/>  
          </a>   
          <br/>
          <Moto src={moto} alt=""/>        
          <br/>
            <a href="https://itunes.apple.com/us/app/barfriends/id1445453937?ls=1&mt=8">
              <Ios src={iosdownload} alt=""/>  
            </a>
          <br/>
          <br/>
          <History src={bfhistory} alt=""/>  
        </div>
        <StyleComp>
          <p style={{marginLeft: '100px', fontSize: '70px', fontWeight: '800', marginBottom: '20vh', textDecoration: 'underline'}}>
            IOS Components Are Mocked In Sketch <span style={{color: '#ff7000'}}>&</span> Then Go Into Development
          </p>
          <CompGrid>
            <Mock src={viewBar} onMouseOver="this.src={viewBar}" alt=""/>
            <Mock src={barmap} alt=""/>
            <Mock src={profile} alt=""/>
            <Mock src={chat} alt=""/>
          </CompGrid>
        </StyleComp>
        <Process><br/><br/>
          <p>Design Process w/ Sketch</p>
          <SketchIcon src={sketchicon} alt=""/>
          <Pannel2 src={pannel2} alt=""/>
          <Preview src={preview2} alt=""/>
          <p className="textbox1">Showing a Users path from login to Main Screen to Users profile. This method required a walk through and I've moved on to interative protoyping with Adobe XD and with Sketch prototyping feature.</p>
          <br/>
          <Pannel src={pannel} alt=""/>
          <Preview src={preview} alt=""/>
          <p className="textbox2" style={{textAlign: 'left'}}>
          Above is showing my design/creative process. 
          This is where I am creating multiple features like ID, Heatmap, and bar owners/bands/DJ/Comedians user group. 
          <br/>
          <br/>
          After I work through enough problems for each feature,
           I will start a new Sketch page with a single feature and I'll complete a design and walk through, and start writting a implementation report.
          <br/>
          <br/>
          I use Google Docs and start asking questions like:
          <ul >
            <li> How hard is this to code? What problems will I get (pros/cons)?</li>
            <li> Is this the direction of the company and does the business model need adjust?</li>
            <li> How does this benifit my current users? Does it grow my user base, What is the good and bad?</li>
            <li> Is this feature the end or is it the begining? Is there more to add to make it better or is it already the best.</li>
            <li> Will this be impactful? Socially, economically.. Does this feature challenge the current or is it creating the wave?</li>
            <li> What road blocks do I have? Are they career enders, lifers, stubbed toes, limps, broken bones? When faced with the a road block what is are resolutions?</li>
            <li> Who makes money from this? How much will this cost?</li>
          </ul>
          </p>
        </Process>
        <Linker>
        <span>I know you're l👀king for more. Check out my <Link href="/skill"><a style={{ fontWeight: '600', color: '#FF7000'}}>Skills</a></Link> page for technologies.</span>
        {/* <span>Check out my <Link href="/skill"><a style={{ fontWeight: '600', color: '#FF7000'}}>Skills</a></Link> page, for more about me and the technologies I know 👀.</span> */}
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
  max-width: 700px;
  margin-left: 50%;
  transform: translateX(-50%);
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
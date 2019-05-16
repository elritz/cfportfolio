import React, { Component } from 'react'
import styled from 'styled-components'

const icon = '../../static/images/Works/icon.svg'
const label = '../../static/images/Works/label.svg'
const moto = '../../static/images/Works/moto.svg'
const iosdownload = '../../static/images/Works/iosdownload.svg'
const bfhistory = '../../static/images/Works/bfhistory.png'
const mock1 = '../../static/images/Works/mock1.svg'
const mock2 = '../../static/images/Works/mock2.svg'
const mock3 = '../../static/images/Works/mock3.svg'
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
          <p style={{marginLeft: '100px', fontSize: '70px', fontWeight: '800', marginBottom: '20vh'}}>
          Complex Components Are Mocked & Then Ready for Development
          </p>
          <CompGrid>
            <Mock src={mock1} alt=""/>
            <Mock src={mock2} alt=""/>
            <Mock src={mock3} alt=""/>
            <Mock src={mock3} alt=""/>
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
        </Process>
      </div>
    )
  }
}

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
    background: #121313;
    /* margin-top: -80px; */
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 20px; font-weight: 300; line-height: 40px;
    width: 1000px;
    color: #FCF8F8;
    border-radius: 100px;
    padding: 50px 100px;
    -webkit-box-shadow: -1px -2px 35px 2px rgba(22,24,24,1);
    -moz-box-shadow: -1px -2px 35px 2px rgba(22,24,24,1);
    box-shadow: -1px -2px 35px 2px rgba(22,24,24,1);
    @media (max-width: 1000px) {
      border-radius: 60px;
      width: 100%;
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
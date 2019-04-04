import React, { Component } from 'react'
import styled from 'styled-components';

const html = '../static/images/skills/html5.png'
const JS = '../static/images/skills/js.png'
const css3 = '../static/images/skills/css3.png'
const json = '../static/images/skills/json.png'
// Second Skills
const react = '../static/images/skills/react.png'
const graphql = '../static/images/skills/graphql.png'
const prisma = '../static/images/skills/prisma.png'
const php = '../static/images/skills/php.png'
const SQL = '../static/images/skills/mysql.png'
const node = '../static/images/skills/nodejs.png'
const sass = '../static/images/skills/sass.png'
const svg = '../static/images/skills/svg.svg'
const apollo = '../static/images/skills/apollo.png'
const style = '../static/images/skills/styled.png'



const OuterBox = styled.div`
  background: #044D3A;
  display: grid;
  position: absolute;
  top: 0px; left: 0px; right: 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px ;
  height: 140vh;
  width: 100%;
  font-family: Roboto Mono,Courier New,Courier,monospace!important;
  overflow: hidden;
  
  .zero {
    grid-row: 3;
  }
  .one {
    grid-row: 4;
  }
  .two {
    grid-row: 5;
  }
  .three {
    grid-row: 6;
  }
  .four {
    grid-row: 7;
  }
  .five {
    grid-row: 8;
  }
  .six {
    grid-row: 9;
  }
  .seven {
    grid-row: 10;
  }
  .eight {
    grid-row: 11;
  }
  .nine {
    grid-row: 12;
  }
  .ten {
    grid-row: 13;
  }
  .eleven {
    grid-row: 14;
  }
  .twelve {
    grid-row: 16;
  }
  .thirteen {
    grid-row: 17;
  }
  .fourteen {
    grid-row: 18;
    @media (max-width: 1046px) {
      grid-row: 19;
    };
  }
  .firteen {
    grid-row: 19;
    @media (max-width: 1046px) {
      grid-row: 20;
    };
  }
  .sixteen {
    grid-row: 20;
    @media (max-width: 1046px) {
      grid-row: 21;
    };
  }
  .seventeen {
    grid-row: 21 / 27;
    @media (max-width: 1046px) {
      grid-row: 22;
    };
  }
  .eightteen {
    grid-row: 26; 
    @media (max-width: 1796px) {
      grid-row: 27;
    };
    @media (max-width: 1550px) {
      grid-row: 25;
    };
    @media (max-width: 1495px) {
      grid-row: 26;
    };
    @media (max-width: 1202px) {
      grid-row: 27;
    };
    @media (max-width: 1046px) {
      grid-row: 29;
    };
    @media (max-width: 903px) {
      grid-row: 29;
    };
    @media (max-width: 856px) {
      grid-row: 30;
    };
  }
  .nineteen {
    grid-row: 27;
    @media (max-width: 1796px) {
      grid-row: 28;
    };
    @media (max-width: 1550px) {
      grid-row: 26;
    };
    @media (max-width: 1495px) {
      grid-row: 27;
    };
    @media (max-width: 1202px) {
      grid-row: 28;
    };
    @media (max-width: 1136px) {
      grid-row: 28;
    };
    @media (max-width: 1046px) {
      grid-row: 30;
    };
    @media (max-width: 900px) {
      grid-row: 29;
    };
    @media (max-width: 903px) {
      grid-row: 30;
    };
    @media (max-width: 856px) {
      grid-row: 31;
    };
  }
`;
const Line = styled.div`
  background: #ff7000;
  width: 1px;
  grid-column: 3;
  margin-left: 5px;
  grid-row: 1 / -1;
  z-index: 2;
  @media (max-width: 1550px) {
    grid-column: 1;
    justify-self: end;
    margin-right: -25px;
  };
`;
const Object = styled.div`
  grid-column: 2 / 9;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 60px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px;
  width: 100%;
  @media (max-width: 1550px) {
  grid-column: 1 / 9;
  };
  @media (max-width: 900px) {
  grid-column: 2 / -1;
  };
  
`;
const Content = styled.div`
  grid-column: 3 / 9;
  color: #FF7000;
  justify-self: start;
  font-size: 21px;
  font-weight: 400;
  line-height: 40px;
   min-width: 1000px;
   ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  @media (max-width: 1550px) {
    /* font-size: 17px; */
    font-size: 16px;
  };
  @media (max-width: 1200px) {
    min-width: 500px;
  };
  @media (max-width: 900px) {
    grid-column: 1 / 9;
    margin-left: 50px;
  };
  @media (max-width: 780px) {
    font-size: 14px;
  };
  @media (max-width: 650px) {
    font-size: 12px;
  };
`;

const NumberLine = styled.div`
  grid-column: 2;
  grid-row: 2;
  justify-self: end;
  margin-left: -10px;
  div {
    color: lightgrey;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
  }
  @media (max-width: 1550px) {
    grid-column: 1;
    justify-self: middle;
  };
`;


export default class Skills extends Component {
  render() {
    return (
      <OuterBox>
        <NumberLine>
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>09</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          {/* <div>31</div>
          <div>32</div>
          <div>33</div> */}
        </NumberLine>
        <Line />
        <Object className="zero"><Content>class <span style={{color: '#FFFF4F', fontWeight: '400'}}>Christian Palvetzian</span> </Content></Object>
        <Object className='one' ><Content>ׁ· · · <span style={{color: 'grey', fontWeight: '200'}}>// I'm ambitious and love new challenges :)</span></Content></Object>
        <Object className='two'><Content>ׁ· · · <span style={{color: 'grey', fontWeight: '200'}}>// My variety of skills us continuously expanding!</span></Content></Object>
        <Object className='three'><Content>ׁ· ·<span> constructor<span style={{color: 'white'}}>()</span> <span style={{color: 'white'}}> &#123;</span> </span></Content></Object>
        <Object className='four'><Content>ׁ· · · <span style={{color: 'grey', fontWeight: '200'}}> <span style={{color: 'red'}} >this</span>.<span style={{color: '#22DD88'}}>name</span> <span style={{color: 'red'}} >=</span>  <span style={{color: '#22DF33'}}>'Christian Palvetzian'</span></span></Content></Object>
        <Object className='five'><Content>ׁ· · ·<span style={{color: 'grey', fontWeight: '200'}}> <span style={{color: 'red'}} >this</span>.<span style={{color: '#22DD88'}}>dateofbirth</span> <span style={{color: 'red'}} >=</span>  <span style={{color: '#22DF33'}}>'03251995'</span></span> </Content></Object>
        <Object className='six'><Content>ׁ· · · <span style={{color: 'grey', fontWeight: '200'}}> <span style={{color: 'red'}} >this</span>.<span style={{color: '#22DD88'}}>email</span> <span style={{color: 'red'}} >=</span>  <span style={{color: '#22DF33'}}>'cpalvetzian@gmail.com'</span> </span></Content></Object>
        <Object className='seven'><Content>ׁ· ·<span style={{color: 'white'}}> &#125;</span></Content></Object>
        <Object className='eight'><Content>ׁ· ·<span style={{color: '#FFFF4F'}} > workExperience<span style={{color: 'white'}}>()</span> <span style={{color: 'white'}}> &#123;</span> </span></Content></Object>
        <Object className='nine'><Content>ׁ· · · ·<span>return<span style={{color: 'white'}}> [</span></span></Content></Object>
        <Object className='ten'><Content>ׁ· · · · · ·<span><span style={{color: 'white'}}> &#123;</span> <span style={{color: '#22DF33'}}>'2017-now'</span> :  <span style={{color: '#22DF33'}}>'Full-Stack for Pepi's Pizza website '</span>  </span> <span style={{color: 'white'}}>&#125;</span> </Content></Object>
        <Object className='eleven'><Content>ׁ· · · · · ·<span><span style={{color: 'white'}}> &#123;</span> <span style={{color: '#22DF33'}}>'2018-now'</span> :  <span style={{color: '#22DF33'}}>'Frontend Web and Mobile for Barfriends Inc.'</span>  </span> <span style={{color: 'white'}}>&#125;</span> </Content></Object>
        <Object className='twelve'><Content>ׁ· · · · · ·<span><span style={{color: 'white'}}> &#123;</span> <span style={{color: '#22DF33'}}>'2018-now'</span> :  <span style={{color: '#22DF33'}}>'Project Manager for Barfriends Inc'</span>  </span> <span style={{color: 'white'}}>&#125;</span> </Content></Object>
        <Object className='thirteen'><Content>ׁ· · · · · ·<span><span style={{color: 'white'}}> &#123;</span> <span style={{color: '#22DF33'}}>'2018'</span> :  <span style={{color: '#22DF33'}}>'Full-Stack Designer / Developer for personal website'</span>  </span> <span style={{color: 'white'}}>&#125;</span> </Content></Object>
        <Object className='fourteen'><Content>ׁ· · · ·<span><span style={{color: 'white'}}> ]</span></span></Content></Object>
        <Object className='firteen'><Content>ׁ· ·<span><span style={{color: 'white'}}> &#125;</span></span></Content></Object>
        <Object className='sixteen'><Content>ׁ· ·<span style={{color: '#FFFF4F'}} > skills<span style={{color: 'white'}}>()</span> <span style={{color: 'white'}}>&#123;</span> </span></Content></Object>
        <Object className='seventeen'><Content>ׁ· · · ·<span> return<span style={{color: 'white'}}> [</span> <span style={{color: '#22DF33'}}>'HTML5.0 / CSS3 / Jquery / JS', 'React', 'Next.js', 'Apollo', 'AWS / Prisma', 'Node.js', 'Google API Console, Facebook Developer', 'Jest', 'Enzyme', 'Graphql', 'php', 'mySQL', 'SASS', 'Boostrap / Styled-components / Material UI', 'npm / yarn / brew', 'GIT/CVS', 'Slack / Github / BitBucket / Supernova / Notion' 'Firebase', 'Web Sockets', 'Wordpress', 'Sketch / Photoshop / After Effects', 'Fusions 360 / AutoDesk'</span> <span style={{color: 'white'}}> ]</span> </span></Content></Object>
        <Object className='eightteen'><Content>ׁ· · · ·<span style={{color: 'white'}}> ] </span></Content></Object>
        <Object className='nineteen'><Content>ׁ· ·<span><span style={{color: 'white'}}> &#125;</span></span></Content></Object>
      </OuterBox>
    )
  }
}


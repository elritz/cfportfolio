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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 500px 1fr;
`;

const SkillBox = styled.div`
  /* background: blue; */
  display: grid;
  margin: 10px 10px;
  grid-gap: 13px;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-template-rows: 100px 1fr;
  justify-self: center;
  color: ${props => props.theme.offWhite};
`;
const SkillTitle = styled.div`
  /* background: red; */
  width: 100%; height: 100px; 
  grid-column: 1 / -1;
  font-size: 40px;
  font-weight: 800;
  line-height: 100px;
  @media (max-width: 700px) {
    font-size: 30px;
  };
`;

const SkillItem = styled.div`
  height: 100%;
  width: 100%;
  p {
    text-align: center;
  }
  img {
    width: 80px;
    margin-top: 10px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;



export default class Skills extends Component {
  render() {
    return (
      <OterBox>
        Skills
      </OterBox>
        // <SkillGrid>
        //   <SkillBox>
        //   <SkillTitle>Core Skills</SkillTitle>
        //     <SkillItem>
        //       <img src={html} alt="HTML & HTML5"/>
        //       <p>Well versed in structuring websites using repetitive outlines that make it easy to read.</p>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={JS} alt="Javascript"/>
        //       <p>The brain language of the internet. I use JS to create dynamic modern website for advanced functionality and user interaction.</p>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={css3} alt="CSS & CSS3"/>
        //       <p>Simple and short if possible using the cutting edge of CSS with cssGRID, SASS, styled-components and animation.</p>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={svg} alt="CSS & CSS3"/>
        //       <p>Used for creating data for users or products. Also used injunction with React and JS frameworks</p>
        //     </SkillItem>
        //   </SkillBox>
        //   <SkillBox>
        //     <SkillTitle>  
        //       Equipment |  Tools  | Resources
        //     </SkillTitle>
        //     <SkillItem>
        //       <img src={react} alt="GraphQL"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={graphql} alt="GraphQL"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={prisma} alt="Prisma"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={php} alt="PHP"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={SQL} alt="My SQL"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={node} alt="node JS"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={sass} alt="SASS"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={svg} alt="SASS"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={apollo} alt="SASS"/>
        //     </SkillItem>
        //     <SkillItem>
        //       <img src={style} alt="SASS"/>
        //     </SkillItem>
        //   </SkillBox>
        // </SkillGrid>
    )
  }
}


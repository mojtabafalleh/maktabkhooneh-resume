import React, { Component } from "react";
import FullPage from "../component/FullPage";
import CardSkill from "../component/CardSkill";
import data from "../data.json";

import CardGroup from 'react-bootstrap/CardGroup';
export default class SkillSection extends Component {
  render() {
    return (
        <FullPage>
        <h1>{data.section[1].title}</h1>
        <CardGroup style={{marginTop: "13rem"}}>
<CardSkill skill={data.section[1].itmes[0].content.title} photo="./java.bmp"text={data.section[1].itmes[0].content.text}/>
<CardSkill skill={data.section[1].itmes[1].content.title}photo="./android.bmp"text={data.section[1].itmes[1].content.text}/>
<CardSkill skill={data.section[1].itmes[2].content.title} photo="./react.bmp" text={data.section[1].itmes[2].content.text}/>
</CardGroup>
      </FullPage>


    );
  }
}

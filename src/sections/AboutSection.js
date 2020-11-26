import React, { Component } from "react";
import FullPage from "../component/FullPage";
import data from "../data.json";

export default class AboutSection extends Component {
  render() {
    return (
      <FullPage >  
      <h1>{data.section[0].title}</h1>
      <h3 style={{marginTop: "10rem"}}>{data.section[0].itmes[0].content}</h3>
      </FullPage >  


    );
  }
}

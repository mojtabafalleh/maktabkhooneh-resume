import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import FullPage from "../component/FullPage";
import DownIcon from "../component/DownIcon";
import data from "../data.json";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class TitileAndSection extends Component {
  render() {
    return (
     <div  >
      <FullPage>
          <div style={{textAlign: "center", justifyItems:"center"}}>
            <h1 className="title" >{data.title}</h1>
            <h3>{data.subtitle}</h3>
          </div>
          <div>
            {Object.keys(data.links).map((key) => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
        </FullPage>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
<DownIcon onClick={()=>console.log("woring")}/>
</Link>
<Element name="test1" className="element">
        </Element>


</div>
    );
  }
}

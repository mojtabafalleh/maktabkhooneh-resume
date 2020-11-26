import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Navigation extends Component {
  state = {
    color: "light",
    color2:"primary",
    num: 1,
  };

  chengeColor = () => {
    const   themes = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ];

    this.setState({
      num :this.state.num === 7?0:this.state.num+1,
      color: themes[this.state.num]
      ,color2: themes[this.state.num+1]
    });
  };
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg={this.state.color}
          variant={this.state.color}
          fixed="top"
          style={{ fontSize: 15 }}
        >
          <Button
                  bg={this.state.color2}
                  variant={this.state.color2}
            style={{ fontSize: 15 }}
            onClick={() => {
              this.chengeColor();
            }}
          >
            تغیر رنگ
          </Button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav >
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={1510} duration={500} >
              <Nav.Link  style={this.state.color=="light"?{color:"black"}:{color:"white"}} href="">مهارت ها</Nav.Link>
              </Link>
<Element name="test1" className="element">
        </Element>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={810} duration={500} >
              <Nav.Link  style={this.state.color=="light"?{color:"black"}:{color:"white"}} eventKey={2} href="">
                درباره
              </Nav.Link>
              </Link>
<Element name="test1" className="element">
        </Element>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

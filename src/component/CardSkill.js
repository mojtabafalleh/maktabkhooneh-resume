import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


export default class CardSkill extends Component {


  render() {
    return (
<div>


<Card  border="red" style={{ width: '18rem' ,marginLeft:"20px" }}>
<Card.Img variant="top" src={this.props.photo} style={{width:'15rem', alignSelf:"center"}}/>
    <Card.Body>
    <Card.Title style={{fontSize:15,}}>{this.props.skill}</Card.Title>
      <Card.Text>{this.props.text}
     {' '}
      </Card.Text>
    </Card.Body>
  
  </Card>


</div>
    );
  }
}

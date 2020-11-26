import React ,{Component} from 'react';
import "./fullpage2.css";
export default class FullPage extends Component{

render(){

const {children } = this.props 
    return (<div className={`fullpage ${this.props.className || ''}`} style={{backgroundColor:"transparent"}}>
{children}

    </div>);
}

}
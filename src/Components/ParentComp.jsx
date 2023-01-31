import React,{Component} from "react";
import  ChildComp from "./ChildComp.jsx"

class ParentComp extends React.Component {
constructor(props){
    super(props);
    this.state = {
        ParentName: 'Good day react'
    }
    this.greetPa = this.greetPa.bind(this)

}
greetPa() {
    alert(`Hello ${this.state.ParentName}`)
}

render() {
    return(
        <ChildComp greetHan={this.greetPa}/>
    )
}
}

export default ParentComp;

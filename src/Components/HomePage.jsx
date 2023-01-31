import React from "react";

function Message(props) {
if(props.isLoggedin) 
  return <h2>Welcome</h2>  

else 
return <h3>Hweloo</h3>
}

function Logout (props) {
    return(
        <div><button onClick={props.clickFunc}>Logout</button></div>
    )
}

function Login (props) {
    return(
        <div><button onClick={props.clickFunc}>Login</button></div>
    )
}

class HomePage extends React.Component {
constructor(props) {
    super(props);
    this.state = {isLoggedin:false}
    this.ifLoggedIn = this.ifLoggedIn.bind(this)
    this.ifLoggedout = this.ifLoggedout.bind(this)
}

ifLoggedIn() {
    this.setState({isLoggedin:true})
}

ifLoggedout() {
    this.setState({isLoggedin:false})
}

render() {
    return(
    <>
        <Message isLoggedin = {this.state.isLoggedin}/>

{(this.state.isLoggedin) ?
   ( <Logout clickFunc={this.ifLoggedout}/>)
: (<Login clickFunc={this.ifLoggedIn}/> )
}
    </>
    )
}
}

export default HomePage;
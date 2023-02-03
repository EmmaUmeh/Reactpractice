import React from "react";
import Receiver from "./Components/Receiver";
import FunctionList from "./Components/FunctionList";
import EffectSign from "./Components/EffectSign";
import EventCleanup from "./Components/EventCleanup"
import Clock from "./Components/Clock";
import PhotoList from "./Components/PhotoList"
import Listphoto from "./Components/Listphoto";
import ListDev from "./Components/ListDev";
import ListWithrender from "./Components/ListWithrender";
// import Navmenu from "./Components/Navmenu.jsx";
// import HomePage from "./Components/HomePage.jsx";

// import Main from "./Components/Main.jsx";
// import ParentComp from "./Components/ParentComp.jsx";


function App() {

  return (
    <div className="">
     {/* <HomePage />
     <Main /> */}
      <Navmenu menu={numbers}/>
      <Navmenu menu={name}/>
      <Receiver />
      <FunctionList />
      <EffectSign />
      <EventCleanup />
      <Clock />
      <PhotoList />
      <Listphoto />
      <ListDev />
      <ListWithrender/>
        {/* <ParentComp /> */}
        <div>
      
      </div>
    </div>
  
  )
}


function MenuItems(props) {
  const items = props.items;
  return <li>{items}</li>
  }
 function Navmenu(props) {
    const list = props.menu;
    const updatelist = list.map((lists)=>{
    return  <MenuItems key={lists.toString()} items={lists}/>
    })
     return(
      <ul>{updatelist}</ul>
     )
   

  }
  const numbers = [1,2,3];
 const name = ['Emma','rose']
export default App

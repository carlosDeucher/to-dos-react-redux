import React, { Component } from "react";
import { hot } from "react-hot-loader";
import ToDosComponent from "./components/ToDo"
import ToDoCreator from "./components/ToDoCreator";
import SideBar from "./components/SideBar";
import "./css/app.css";
import "./css/variables.css";
function App() {
        
    return (
      <div className="app">
         <div className="to-do-creator-container">
                <ToDoCreator></ToDoCreator>
         </div>
         <div className="to-dos-container">   
            <ToDosComponent ></ToDosComponent>

         </div>
         
         <div className="side-bar-container">
          <SideBar></SideBar>
         </div>
      </div>
    );
}

export default hot(module)(App);


import React from "react";
import {connect} from "react-redux";
import { finishToDo, deleteToDo } from "../store/actions";
import "../css/toDo.css";

 const ToDos=function({toDosProps, finishToDoProps, deleteToDoProps}){
    console.log(finishToDoProps)
  return (
    <>
    
    <section className="to-dos">
      {toDosProps.map((value)=>{
        if(value.completed === true) return
     return <ToDo finishToDoProps={finishToDoProps} deleteToDoProps={deleteToDoProps} toDoObject={value} key={value.key}></ToDo>
 }
 )}
    </section>
    </>
  )
}

const ToDo=function(props){
  console.log(props);
let {priority, title, key}=props.toDoObject
   return (
    <div className="to-do-box" data-testid="red" color={priority}>
      <div className="to-do-actions">
        <div onClick={()=>props.finishToDoProps(key)} className="done">
        </div>
        <div onClick={()=>props.deleteToDoProps(key)} className="remove">
         
        </div>
      </div>
      <div className="content">
        <h2 className="to-do-title">{title}</h2>
      </div>
         
      
      </div>
   )
};
const mapStateToProps= function(state){
     return {
      toDosProps:state.toDos.toDos
     }
};
const mapDispatchToProps=function(dispatch){
  return{
    finishToDoProps(key){
      const action=finishToDo(key);
      dispatch(action);
    },
    deleteToDoProps(key){
      const action= deleteToDo(key)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDos)
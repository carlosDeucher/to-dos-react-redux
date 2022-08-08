import React from "react"
import { connect } from "react-redux";
import "../css/sideBar.css"
const SideBar=function (props){
  let {countOfCompleted, countOfIncomplete, toDosProps}= props;
return(
<div className="sidebar-content-flex">
  <h3 className="to-dos-info">Tarefas concluídas: <span>{countOfCompleted}</span></h3>
  <h3 className="to-dos-info">Tarefas a serem feitas: <span>{countOfIncomplete}</span></h3>
  <h3 className="to-dos-info to-dos-completed">Tarefas concluídas:{toDosProps.map((value)=>{
    if(value.completed===true) return <div className="name-of-to-do-completed" key={value.key}><span >{value.title}</span></div>
  
}

  )} </h3>
  {/* <h3 className="to-dos-info">Tarefas concluídas:<div key={toDosCompletedProps[0].key}><span >{toDosCompletedProps[0].title}</span></div> </h3> */}
</div>
);
};

const mapStateToProps=(state)=>{
  return{
    countOfCompleted:state.toDos.countOfToDosCompleted,
    countOfIncomplete:state.toDos.countOfToDosIncomplete,
    toDosProps:state.toDos.toDos
  }
}


export default connect(mapStateToProps)(SideBar)
// export default SideBar
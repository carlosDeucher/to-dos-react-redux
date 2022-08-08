import React, { useState} from "react";
import {connect} from "react-redux"
import "../css/toDoCreator.css"
import { createNewToDo } from "../store/actions";
  const ToDoCreator=function({createNewToDoProps}){
          const [inputOfToDoTitle, setInputOfToDoTitle]= useState("");
          const [priorityLevel, setPriorityLevel]=useState("")
  return(
      <div className="creator-content">
        <input value={inputOfToDoTitle} onChange={(e)=>setInputOfToDoTitle(e.target.value)} type="text" placeholder="Digite o nome da tarefa"></input>
        <div className="radio-group">
        
        <input onClick={(e)=>setPriorityLevel(e.target.value)} className="option red margin-right" id="option-red" value="red" type="radio" name="toDoPriority"/>
        <label htmlFor="option-red" data-testid="red"  clicked={priorityLevel==="red" ? "true" :"false"}></label>
        <input onClick={(e)=>setPriorityLevel(e.target.value)} className="option orange margin-right" id="option-orange" value="orange" type="radio" name="toDoPriority"/>
        <label htmlFor="option-orange" clicked={priorityLevel==="orange" ? "true" :"false"}></label> 
        <input onClick={(e)=>setPriorityLevel(e.target.value)} className="option yellow" id="option-yellow" value="yellow" type="radio" name="toDoPriority"/>
        <label htmlFor="option-yellow" clicked={priorityLevel==="yellow" ? "true" :"false"}></label>
        </div>
        
        <button className="save-button" onClick={()=>{
          createNewToDoProps({title:inputOfToDoTitle, priority:priorityLevel})
          setInputOfToDoTitle("")
          setPriorityLevel("")
        }
        } >Salvar</button> {/*aqui vou enviar uma action para o dispatch*/ }
      </div>
  );
};
const mapDispatchToProps=function(dispatch){
      return {
        createNewToDoProps(toDo){
          toDo.completed=false;
          const action=createNewToDo(toDo)
          dispatch(action)
        }
      }
    }
export default connect(null,mapDispatchToProps)(ToDoCreator)
// export default ToDoCreator;
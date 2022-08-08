import { CRIA_NOVA_TAREFA, COMPLETA_TAREFA, DELETA_TAREFA } from "../actions/actionsTypes"
const initialState={
  toDos:[],
  countOfToDosCompleted:0,
  countOfToDosIncomplete:0,
}
export default function(state=initialState, action){
  let toDosCopyOfState=[...state.toDos].map(a => {return {...a}})
  let lastKey=toDosCopyOfState.length===0 ? 0 : toDosCopyOfState[toDosCopyOfState.length-1].key;
  let indexDoObj=null;
  switch(action.type){
    case CRIA_NOVA_TAREFA:
     toDosCopyOfState.push(action.payload)
     toDosCopyOfState[toDosCopyOfState.length-1].key=lastKey+1
      return {
    ...state,
    toDos:toDosCopyOfState,
    countOfToDosIncomplete:state.countOfToDosIncomplete+1
   }
   case COMPLETA_TAREFA:
    console.log(toDosCopyOfState);
    indexDoObj=toDosCopyOfState.findIndex((value)=>value.key===action.payload)
    toDosCopyOfState[indexDoObj].completed=true;
    console.log(indexDoObj)
    
    return{
      ...state,
      toDos:toDosCopyOfState,
      countOfToDosCompleted:state.countOfToDosCompleted+1,
      countOfToDosIncomplete:state.countOfToDosIncomplete-1,
      
    }
    case DELETA_TAREFA: 
    indexDoObj=toDosCopyOfState.findIndex((value)=>value.key===action.payload)
    console.log(indexDoObj)
    toDosCopyOfState.splice(indexDoObj,1)
    console.log(toDosCopyOfState);
    return{
      ...state,
      toDos:toDosCopyOfState,
      countOfToDosIncomplete:state.countOfToDosIncomplete-1
    }
  default :return {...state}
  };
   
};
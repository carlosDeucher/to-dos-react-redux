import { CRIA_NOVA_TAREFA,COMPLETA_TAREFA,DELETA_TAREFA } from "./actionsTypes"
export function createNewToDo(payload){
      return {
        type:CRIA_NOVA_TAREFA,
        payload:payload,
      }
}
export function finishToDo(payload){
  return {
    type:COMPLETA_TAREFA,
    payload:payload
  }
}
export function deleteToDo(payload){
  return {
    type:DELETA_TAREFA,
    payload
  }
}
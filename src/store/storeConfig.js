import {createStore, combineReducers} from "redux";
import toDosReducer from "./reducers"
const reducers =combineReducers({
  toDos:toDosReducer
})
function storeConfig(){
  return createStore(reducers);
 };
export default storeConfig();
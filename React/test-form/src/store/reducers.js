import { combineReducers } from "redux";
import { promptReducer } from "./prompt/reducers";
import { formBoxReducer } from "./formBoxes/reducers";

export default combineReducers({
  prompt: promptReducer,
  boxStatus: formBoxReducer
});
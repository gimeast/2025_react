import { combineReducers } from "redux";
import counter from "./counter.js";
import todos from "./todos.js";

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;

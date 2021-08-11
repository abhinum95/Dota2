import { combineReducers } from "redux";
import heroesReducer from "./heroes";

const rootReducer = combineReducers({
  heroesList: heroesReducer,
});

export default rootReducer;

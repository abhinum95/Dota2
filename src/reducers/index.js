import { combineReducers } from "redux";
import { heroesReducer } from "./heroes";
import { filterReducer } from "./filter";

const rootReducer = combineReducers({
  heroesList: heroesReducer,
  filter: filterReducer,
});

export default rootReducer;

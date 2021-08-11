import { combineReducers } from "redux";
import { heroesReducer, searchReducer } from "./heroes";

const rootReducer = combineReducers({
  heroesList: heroesReducer,
  searchTerm: searchReducer,
});

export default rootReducer;

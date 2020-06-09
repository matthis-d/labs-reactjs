import { combineReducers, createStore } from "redux";
import { rulesReducer } from "./reducers/rules-reducer";

const appReducer = combineReducers({
  rules: rulesReducer,
});

export const store = createStore(appReducer);

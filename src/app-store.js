import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rulesReducer } from "./reducers/rules-reducer";

const appReducer = combineReducers({
  rules: rulesReducer,
});

export const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { rulesReducer } from "./reducers/rules-reducer";

const appReducer = combineReducers({
  rules: rulesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

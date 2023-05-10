import { combineReducers, legacy_createStore } from "redux";
import reducers from "./reducer.ts";
import NumStatus from "./NumStatus/reducer.ts";
import ArrStatus from "./ArrStatus/reducer.ts";
// 组合各个模块
const reducers = combineReducers({ NumStatus, ArrStatus });
const store = legacy_createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

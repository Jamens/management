import {
  combineReducers,
  legacy_createStore,
  compose,
  applyMiddleware,
} from "redux";
import reducers from "./reducer.ts";
import NumStatus from "./NumStatus/reducer.ts";
import ArrStatus from "./ArrStatus/reducer.ts";
import reduxThunk from "redux-thunk";
// 组合各个模块
const reducers = combineReducers({ NumStatus, ArrStatus });
// 创建仓库，注册reducers
// const store = legacy_createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
// 把仓库数据。浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
export default store;

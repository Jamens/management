// 路由旧方法
import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// 两种路由模式的组件,BrowserRouter(History模式) HashRouter(Hash模式)
// const baseRouter = ()=>{
//     return()
// }
// 以上写法简写为：
const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
export default baseRouter;

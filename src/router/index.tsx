import Home from "../views/Home";
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
const User = lazy(() => import("../views/User"));
const About = lazy(() => import("../views/About"));
// 懒加载模式需要我们给外面一层嵌套Loading提示加载组件
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
  {
    path: "/user",
    element: withLoadingComponent(<User />),
  },
];
export default routes;

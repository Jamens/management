import Home from "../views/Home";
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
const User = lazy(() => import("../views/User"));
const About = lazy(() => import("../views/About"));
// 懒加载模式需要我们给他添加一个Loading组件
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
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <About />
      </React.Suspense>
    ),
  },
  {
    path: "/user",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <User />
      </React.Suspense>
    ),
  },
];
export default routes;

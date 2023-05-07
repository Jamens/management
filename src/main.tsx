import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
// import App from "./App.tsx";
import "@/assets/global.scss";
import Router from "./router";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

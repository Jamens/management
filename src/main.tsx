// import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import App from "./App";
import "@/assets/global.scss";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

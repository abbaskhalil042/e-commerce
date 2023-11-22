import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import MyContext from "./context/data/MyContext.jsx";
import MyState from "./context/data/MyState.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MyContext> */}
    <MyState>
    <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyState>
    
    {/* </MyContext> */}
  </React.StrictMode>
);

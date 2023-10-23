import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TState from "./context/theme/TState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <TState>
      <App />
    </TState>
);

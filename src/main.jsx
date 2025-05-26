import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import fixConsoleErrors from './utils/consoleErrorFix';

// Apply console error fix to prevent crashes when inspecting elements
fixConsoleErrors();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

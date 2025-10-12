import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals.js";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Only log web-vitals in development to avoid noisy object logs in production builds.
if (import.meta.env.DEV) {
  reportWebVitals(console.log);
}

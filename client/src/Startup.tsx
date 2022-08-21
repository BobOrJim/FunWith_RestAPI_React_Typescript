import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  //strictMode dubbelrenderar för att upptäcka anomalies, men inte i prod
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);

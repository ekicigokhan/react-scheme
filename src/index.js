import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // create-react-app komutunu çalıştırdığımız an oluşan default component
import "./index.css";

ReactDOM.render(
  <App />, //App.js componentini index.html'deki root'a render et.
  document.getElementById("root")
);

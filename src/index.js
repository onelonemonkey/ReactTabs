import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Tabs";
import tabsMock from "../data/tabsMock";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Tabs data={tabsMock} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

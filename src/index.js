/** @jsx jsx */
import { jsx } from "@emotion/core";
import ReactDOM from "react-dom";
import Tabs from "./Tabs";
import tabsMock from "../data/tabsMock";

function App() {
  return (
    <div css={{ fontFamily: "sans-serif" }}>
      <Tabs data={tabsMock} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

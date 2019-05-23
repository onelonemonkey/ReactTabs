/** @jsx jsx */
import { jsx } from "@emotion/core";

const TabPane = props => {
  return (
    <div
      role="tabpanel"
      css={{
        padding: "0.5rem 1rem",
        margin: "1rem",
        color: "666",
        display: props.index === props.activeTab ? "block" : "none"
      }}
      aria-hidden={props.index === props.activeTab ? "false" : "true"}
    >
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default TabPane;

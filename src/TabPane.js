/** @jsx jsx */
import { jsx } from "@emotion/core";

const TabPane = props => {
  return (
    <div
      role="tabpanel"
      aria-hidden={props.index === props.activeTab ? "false" : "true"}
      tabIndex={props.index === props.activeTab ? "0" : "-1"}
      css={{
        padding: "0.5rem 1rem",
        margin: "1rem",
        color: "666",
        display: props.index === props.activeTab ? "block" : "none"
      }}
    >
      <h2
        css={{
          fontSize: "1rem",
          paddingBottom: "1rem",
          color: "#666",
          borderBottom: "1px solid #dadada"
        }}
      >
        {props.title}
      </h2>
      <p>{props.content}</p>
    </div>
  );
};

export default TabPane;

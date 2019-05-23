/** @jsx jsx */
import { jsx } from "@emotion/core";

const Tab = props => {
  return (
    <li
      role="presentation"
      css={{
        listStyleType: "none",
        padding: 0,
        margin: 0,
        textAlign: "left"
      }}
    >
      <button
        onClick={() => props.updateActiveTab(props.index)}
        css={{
          backgroundColor: props.index === props.activeTab ? "brown" : "none",
          color: props.index === props.activeTab ? "gold" : "brown",
          fontSize: "1rem",
          padding: "1rem 2rem",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#ccc",
            color: "brown"
          }
        }}
      >
        {props.title}
      </button>
    </li>
  );
};

export default Tab;

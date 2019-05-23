/** @jsx jsx */
import { jsx } from "@emotion/core";

const TabList = props => {
  return (
    <div>
      <ul
        role="tablist"
        css={{
          display: "flex",
          padding: "1em 0 0 1em"
        }}
      >
        {props.children}
      </ul>
    </div>
  );
};

export default TabList;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import TabList from "./TabList";
import Tab from "./Tab";
import TabPane from "./TabPane";

const Tabs = props => {
  const [activeTab, updateActiveTab] = useState(0);

  const tabs = props.data.map((tab, index) => {
    return (
      <Tab
        key={index}
        index={index}
        activeTab={activeTab}
        title={tab.title}
        updateActiveTab={updateActiveTab}
      />
    );
  });

  const content = props.data.map((pane, index) => {
    return (
      <TabPane
        key={index}
        index={index}
        activeTab={activeTab}
        title={pane.title}
        content={pane.content}
      />
    );
  });

  return (
    <div>
      <TabList>{tabs}</TabList>
      {content}
    </div>
  );
};

export default Tabs;

import React, { useState, ReactElement, ReactNode } from "react";
import classes from "./CompoundComponents.module.css";

interface TabsProps {
  children: ReactNode
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleClickedTab = (clickedIndex: number) => {
    setActiveTab(clickedIndex)
  }
  //Validate react elements
  const tabElements = React.Children.toArray(children).filter((child): child is ReactElement => React.isValidElement(child))
  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child, index) => {
          return (
            <li
              key={index}
              className={index === activeTab ? classes.TabActive : undefined}
              onClick={() => handleClickedTab(index)}>
              {child.props.label}
            </li>
          )
        })}
      </ul>
      <div className={classes.TabContent}>
        {tabElements[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;

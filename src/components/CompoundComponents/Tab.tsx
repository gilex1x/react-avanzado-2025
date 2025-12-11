import React from "react";

interface TabProps {
  label: string;
  children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <>
      <label>{label}</label>
      <>{children}</>
    </>
  );
};

export default Tab;

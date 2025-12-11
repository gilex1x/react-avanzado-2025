import { useState } from "react";

interface ChildToggleComponentProps {
  isToggled?: boolean;
  onToggled?: (value: boolean) => void;
}

export const ChildToggleComponent: React.FC<ChildToggleComponentProps> = ({ isToggled = false, onToggled }) => {

  const [toggleState, setToggledState] = useState<boolean>(isToggled);
  const handleToggle = () => {
    const newToggle = !toggleState;
    setToggledState(newToggle);
    if (onToggled) {
      onToggled(newToggle);
    }
  }
  return (
    <>
      <button onClick={handleToggle}>
        Es toggle: {toggleState ? "ON" : "OFF"}
      </button>
    </>
  );
};

export const ParentComponent = () => {
  const [childToggle, setChildToggle] = useState<boolean>(false);
  return (
    <div>
      <span>El child es toggle: {childToggle ? "ON" : "OFF"}</span>
      <ChildToggleComponent isToggled={childToggle} onToggled={setChildToggle} />
    </div>
  );
};

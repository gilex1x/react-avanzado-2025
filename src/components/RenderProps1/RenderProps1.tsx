import React from "react";

type ChildComponentProps = {
  render: (name: string) => JSX.Element;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = 'Hola from render'
  return (
    <div>
      {render(name)}
    </div>
  );
};

export const ParentComponent = () => {
  return (
    <>
      <ChildComponent render={(name) => <p>Texto: {name}!</p>} />
    </>
  );
};
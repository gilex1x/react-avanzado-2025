import Tab from "./Tab";
import Tabs from "./Tabs";

export const CompoundComponents = () => {
  return (
    <Tabs>
      <Tab label="Productos">Productos </Tab>
      <Tab label="Clientes">Clientes</Tab>
      <Tab label="Ventas">Ventas</Tab>
    </Tabs>
  );
};

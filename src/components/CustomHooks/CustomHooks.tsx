import { useState } from "react";
function useLoading(initialLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState<boolean>(initialLoading);
  return {
    isLoading,
    setIsLoading
  }
}

interface UserComponentProps {
  name: string;
}
const UserComponent: React.FC<UserComponentProps> = ({ name }) => {
  const { isLoading, setIsLoading } = useLoading();
  if (isLoading) {
    return <p>Cargando . . .</p>
  } else {
    return (
      <div>
        <p>Hola{name}</p>
        <button onClick={() => setIsLoading(true)}> Set Loading</button>
      </div>
    );
  }
};

export const ParentComponent = () => {
  return <UserComponent name="Gilberto" />;
};

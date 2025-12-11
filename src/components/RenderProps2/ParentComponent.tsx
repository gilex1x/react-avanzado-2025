import { useState } from "react";

interface ParentComponentProps {
    render: (data: string[]) => React.ReactNode
}

const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
    const [data] = useState<string[]>(["Manzan", "Banano", "Pera"]);
    return (
        <ul>
            {render(data)}
        </ul>
    )
};

export default ParentComponent;

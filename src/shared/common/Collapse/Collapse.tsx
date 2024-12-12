import React from "react";

export interface CollapseProps extends React.PropsWithChildren<{}> {
    visible?: boolean
}

const Collapse: React.FC<CollapseProps> = ({ children, visible }) => {
    return (visible &&
        <div className="collapse">
            {children}
        </div>
    );
}
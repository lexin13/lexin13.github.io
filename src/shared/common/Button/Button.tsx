import React from "react";

interface ButtonProps {
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    return(
        <button {...props}>
            {children}
        </button>
    )
}
import React, { Children, FC } from "react";
import { Header } from "../header/Header";

interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
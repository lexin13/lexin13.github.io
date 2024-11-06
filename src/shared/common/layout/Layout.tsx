import React from "react";
import { Header } from "../header/Header";
import { useThemeContext } from "../theme/ThemeProvider";
import { Theme } from "../theme/ThemeProvider";
import style from './layout.module.scss';``
import cn from 'clsx';

interface LayoutProps {
    children?: React.ReactNode,
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const themeContext = useThemeContext();

    return (
        <div className={cn({
            [style.dark]: themeContext.theme === Theme.dark,
            [style.light]: themeContext.theme === Theme.light
        })}>
            <Header />
            {children}
        </div>
    )
}
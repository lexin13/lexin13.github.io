import React from "react";
import { Logo } from "../logo/Logo";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { LanguageSwitcher } from "../language/LanguageSwitcher";
import { useThemeContext, Theme } from "../theme/ThemeProvider";
import style from './header.module.scss';
import cn from 'clsx';

export const Header: React.FC = () => {

    const themeContext = useThemeContext();

    return (
        <header className={cn(style.header, {
            [style.dark]: themeContext.theme === Theme.dark,
            [style.light]: themeContext.theme === Theme.light
        })}>
            <Logo />
            <div>
                <LanguageSwitcher />
                <ThemeSwitcher />            
            </div>
        </header>
    )
}
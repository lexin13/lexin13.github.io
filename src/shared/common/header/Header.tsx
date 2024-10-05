import React, { Children, FC } from "react";
import { Logo } from "../logo/Logo";
import s from './header.module.scss';

interface HeaderProps {
    children?: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <header className={s.header}>
            <Logo />
            <div>{children}</div>
        </header>
    )
}
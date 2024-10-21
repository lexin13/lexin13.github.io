import React from "react";
import { Logo } from "../logo/Logo";
import style from './header.module.scss';

export const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <div>
                <Logo />
            </div>
        </header>
    )
}
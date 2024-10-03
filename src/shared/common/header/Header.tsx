import React from "react";
import { Logo } from "../logo/Logo";
import s from './header.module.scss';

export function Header() {
    return (
        <header className={s.header}>
            <div>
                <Logo />
            </div>
        </header>
    )
}
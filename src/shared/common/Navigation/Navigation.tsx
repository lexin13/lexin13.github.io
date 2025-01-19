import React from 'react';
import cn from 'clsx';
import style from './Navigation.module.scss';

export const Navigation: React.FC = () => {
    return (
        <div className={style.navigation}>
            <nav>
                <ul>
                    <li>
                        <a href='/profile'>Profile</a>
                    </li>
                    <li>
                        <a href='/operations'>Operations</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
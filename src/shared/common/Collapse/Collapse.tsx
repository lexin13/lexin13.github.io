import React, { useState } from "react";
import style from './collapse.module.scss';
import cn from 'clsx';

export interface CollapseProps extends React.PropsWithChildren<{}> {
    opened: boolean
}

export interface CollapseProps extends React.PropsWithChildren<{}> {
    opened: boolean
}

export const Collapse: React.FC<CollapseProps> = ({ children, opened }) => {

    const [mounted, setMounted] = React.useState(true);

    const onTransitionEnd = (event: React.TransitionEvent) => {
        console.log('Transition finished on', event.propertyName);
        !opened && setMounted(false);
    };

    opened && !mounted && setMounted(true);

    console.log(opened, mounted);

    return (mounted &&
        <div className={cn(style.collapse, { [style.hidden]: !opened })} onTransitionEnd={onTransitionEnd}>
            {children}
        </div>
    );
}


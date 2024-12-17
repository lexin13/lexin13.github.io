import React, { useEffect, useState } from "react";
import style from './collapse.module.scss';
import cn from 'clsx';

export interface CollapseProps extends React.PropsWithChildren<{}> {
    opened: boolean
}

export interface CollapseProps extends React.PropsWithChildren<{}> {
    opened: boolean
}

export const Collapse: React.FC<CollapseProps> = ({ children, opened }) => {

    const [hidden, setHidden] = useState(!opened);
    const [mounted, setMounted] = React.useState(opened);

    const onTransitionEnd = (event: React.TransitionEvent) => {
        console.log('Transition finished on', event.propertyName, 'for opened = ', opened);
        setMounted(opened);
        setHidden(!opened);
    };

    useEffect(() => {
        setHidden(!opened);
    }, [opened]);

    // opened && !mounted && setMounted(true);

    console.log(opened, mounted, hidden);

    return ((mounted || opened) &&
        <div className={cn(style.collapse, { [style.hidden]: hidden || !opened })} onTransitionEnd={onTransitionEnd}>
            {children}
        </div>
    );
}


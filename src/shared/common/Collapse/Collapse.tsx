import React, { useEffect, useState, useRef, useCallback } from "react";
import style from './collapse.module.scss';
import cn from 'clsx';

export interface CollapseProps extends React.PropsWithChildren {
    opened: boolean
}

export const Collapse: React.FC<CollapseProps> = ({ children, opened }) => {
    const [hidden, setHidden] = useState(!opened);
    const [mounted, setMounted] = useState(opened);
    const [isLarge, setIsLarge] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const onTransitionEnd = (event: React.TransitionEvent) => {
        setMounted(opened);
        setHidden(!opened);
    };

    const checkIsLarge = useCallback((width: number) => width > 800, []);

    useEffect(() => {
        setHidden(!opened);
    }, [opened]);

    useEffect(() => {
        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (let entry of entries) {
                setIsLarge(checkIsLarge(entry.contentRect.width));
            }
        };

        const observer = new ResizeObserver(handleResize);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <div className={cn(style["collapse-container"], {[style["large-font"]]: isLarge})} ref={containerRef}>
            {(mounted || opened) &&
                <div className={cn(style.collapse, { [style.hidden]: hidden || !opened })} onTransitionEnd={onTransitionEnd}>
                    {children}
                </div>}
        </div>
    );
}
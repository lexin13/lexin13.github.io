import React, { useEffect, useLayoutEffect } from "react";
import style from "./Tip.module.scss";
import { createPortal } from "react-dom";
import cn from "clsx";

interface TipProps extends React.PropsWithChildren<{}> {
    title: string;
    content?: React.ReactNode;
}

export const Tip: React.FC<TipProps> = ({ title, content, children }) => {
    const container = React.useRef<HTMLDivElement>(null);
    const tip = React.useRef<HTMLDivElement>(null);
    const timerRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const [position, setPosition] = React.useState({});

    const showTip = () => {
        timerRef.current && clearTimeout(timerRef.current);
        setVisible(true);
        setMounted(true);
    };

    const hideTip = () => {
        timerRef.current = setTimeout(() => setMounted(false), 1000);
        setVisible(false);
    }

    useLayoutEffect(() => {
        visible &&
            setPosition({
                top: container.current?.getBoundingClientRect().top - tip.current?.getBoundingClientRect().height,
                left: container.current?.getBoundingClientRect().left
            })
    }, [visible]);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <div className={style["tip-container"]} ref={container}>
            {mounted && createPortal(
                <div className={cn(style.tip, { [style.hidden]: !visible })} style={position} ref={tip}>
                    <div className={style.title}>{title}</div>
                    {content}
                </div>,
                document.body
            )}
            <div onMouseEnter={showTip} onMouseLeave={hideTip}>
                {children}
            </div>
        </div>
    )
};
import React, { useLayoutEffect } from "react";
import style from "./Tip.module.scss";
import { createPortal } from "react-dom";

interface TipProps extends React.PropsWithChildren<{}> {
    title: string;
    content?: React.ReactNode;
}

export const Tip: React.FC<TipProps> = ({ title, content, children }) => {
    const container = React.useRef<HTMLDivElement>(null);
    const tip = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({});
    const showTip = () => setVisible(true);
    const hideTip = () => setVisible(false);

    useLayoutEffect(() => {
        visible &&
            setPosition({
                top: container.current?.getBoundingClientRect().top - tip.current?.getBoundingClientRect().height,
                left: container.current?.getBoundingClientRect().left
            })
    }, [visible]);

    return (
        <div className={style["tip-container"]} ref={container}>
            {visible && createPortal(
                <div className={style.tip} style={position} ref={tip}>
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
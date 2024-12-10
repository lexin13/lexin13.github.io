import React, { useLayoutEffect } from "react";
import style from "./Tip.module.scss";
import { createPortal } from "react-dom";

interface TipProps extends React.PropsWithChildren<{}> {
    title: string;
}

export const Tip: React.FC<TipProps> = ({ title, children }) => {
    const container = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = React.useState(false);
    const showTip = () => setVisible(true);
    const hideTip = () => setVisible(false);

    useLayoutEffect(() => {

    }, [visible]);

    return (
        <div className={style["tip-container"]} ref={container}>
            {visible && createPortal(
                <div className={style.tip}>
                    <div className={style.title}>{title}</div>
                </div>,
                document.body
            )}
            <div onMouseEnter={showTip} onMouseLeave={hideTip}>
                {children}
            </div>
        </div>
    )
};
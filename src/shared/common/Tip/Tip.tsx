import React from "react";
import style from "./Tip.module.scss";
import { createPortal } from "react-dom";

interface TipProps extends React.PropsWithChildren<{}> {
    title: string;
}

export const Tip: React.FC<TipProps> = ({ title, children }) => {
    return createPortal(
        <div className={style.tip}>
            <div className={style.title}>{title}</div>
            {children}
        </div>,
        document.body
    );
};
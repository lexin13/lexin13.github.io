import React from "react";
import style from './short_operation.module.scss';

interface ShortOperationProps {
    amount: number;
    category: string;
    name: string;
    description: string;
}

export const ShortOperation: React.FC<ShortOperationProps> = ({ amount, category, name, description }) => {
    return (
        <div className={style["card"]}>
            <div className={style["card-header"]}>
                <span className={style["category"]}>{category}</span>
                <span className={style["money-value"]}>{amount}</span>
            </div>
            <div className={style["card-body"]}>
                <h2 className={style["name"]}>{name}</h2>
                <p className={style["description"]}>{description}</p>
            </div>
        </div>
    );
}
import React from "react";
import style from './operation.module.scss';

interface OperationProps {
    amount: number;
    category: string;
    name: string;
    description: string;
    date: string;
}

export const Operation: React.FC<OperationProps> = ({ amount, category, name, description, date }) => {
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
            <div className={style["card-footer"]}>
                <span className={style["date"]}>{date}</span>
                <button className={style["edit-button"]}>Edit</button>
            </div>
        </div>
    );
}
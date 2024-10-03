import React from "react";
import s from './operation.module.scss';

interface OperationProps {
    amount: number;
    category: string;
    name: string;
    description: string;
    date: string;
}

export function Operation({ amount, category, name, description, date }: OperationProps) {
    return (
        <div className={s.card}>
            <div className={s["card-header"]}>
                <span className={s["category"]}>{category}</span>
                <span className={s["money-value"]}>{amount}</span>
            </div>
            <div className={s["card-body"]}>
                <h2 className={s["name"]}>{name}</h2>
                <p className={s["description"]}>{description}</p>
            </div>
            <div className={s["card-footer"]}>
                <span className={s["date"]}>{date}</span>
                <button className={s["edit-button"]}>Edit</button>
            </div>
        </div>
    );
}
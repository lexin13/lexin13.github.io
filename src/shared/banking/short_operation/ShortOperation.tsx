import React from "react";
import s from './short_operation.module.scss';

interface ShortOperationProps {
    amount: number;
    category: string;
    name: string;
    description: string;
}

export function ShortOperation({ amount, category, name, description }: ShortOperationProps) {
    return (
        <div className={s["card"]}>
            <div className={s["card-header"]}>
                <span className={s["category"]}>{category}</span>
                <span className={s["money-value"]}>{amount}</span>
            </div>
            <div className={s["card-body"]}>
                <h2 className={s["name"]}>{name}</h2>
                <p className={s["description"]}>{description}</p>
            </div>
        </div>
    );
}
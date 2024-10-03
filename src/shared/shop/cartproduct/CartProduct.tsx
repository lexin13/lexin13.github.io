import React from "react";
import s from './cart_product.module.scss';

export interface CartProductProps {
    price: number;
    image: string;
    name: string;
}

export function CartProduct({ price, image, name }: CartProductProps) {
    return (
        <div className={s.card}>
            <div className={s["card-header"]}>
                <img className={s["product-image"]} src={image} />
                <span className={s.price}>{price}</span>
            </div>
            <div className={s["card-body"]}>
                <h2 className={s.name}>{name}</h2>
                <div className={s.bin} />
            </div>
        </div>
    )
}
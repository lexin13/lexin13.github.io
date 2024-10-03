import React from "react";
import s from './short_product.module.scss';
import { CartButton } from "../cartbutton/CartButton";

export interface ShortProductProps {
    price: number;
    image: string;
    name: string;
    description: string;
}

export function ShortProduct({ price, image, name, description }: ShortProductProps) {
    return (
        <div className={s.card}>
            <div className={s["card-header"]}>
                <img className={s["product-image"]} src={image} />
                <span className={s.price}>{price}</span>
            </div>
            <div className={s["card-body"]}>
                <h2 className={s.name}>{name}</h2>
                <p className={s.description}>{description}</p>
                <CartButton counter={0} />
            </div>
        </div>
    )
}
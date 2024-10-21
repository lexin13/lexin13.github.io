import React from "react";
import style from './short_product.module.scss';
import { CartButton } from "../cartbutton/CartButton";

export interface ShortProductProps {
    price: number;
    image: string;
    name: string;
    description: string;
}

export const ShortProduct: React.FC<ShortProductProps> = ({ price, image, name, description }) => {
    return (
        <div className={style.card}>
            <div className={style["card-header"]}>
                <img className={style["product-image"]} src={image} />
                <span className={style.price}>{price}</span>
            </div>
            <div className={style["card-body"]}>
                <h2 className={style.name}>{name}</h2>
                <p className={style.description}>{description}</p>
                <CartButton counter={0} />
            </div>
        </div>
    )
}
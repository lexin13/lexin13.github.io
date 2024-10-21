import React from "react";
import style from './cart_product.module.scss';

export interface CartProductProps {
    price: number;
    image: string;
    name: string;
}

export const CartProduct: React.FC<CartProductProps> = ({ price, image, name }) => {
    return (
        <div className={style["card"]}>
            <div className={style["card-header"]}>
                <img className={style["product-image"]} src={image} />
                <span className={style["price"]}>{price}</span>
            </div>
            <div className={style["card-body"]}>
                <h2 className={style["name"]}>{name}</h2>
                <div className={style["bin"]} />
            </div>
        </div>
    )
}
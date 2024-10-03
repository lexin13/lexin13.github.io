import React from "react";
import s from './product.module.scss';
import { CartButton } from "../cartbutton/CartButton";

interface ProductProps {
    price: number;
    images: string[];
    name: string;
    category: string;
    description: string;
}

export function Product({ price, images, category, name, description }: ProductProps) {
    var imgList = [];

    for (var i = 0; i < images.length; i++) {
        imgList.push(<img src={images[i]} />);
    }

    return (
        <div className={s.card}>
            <div className={s["card-header"]}>
                <span className={s["category"]}>{category}</span>
                <span className={s.price}>{price}</span>
            </div>
            <div className={s["container"]}>
                <div className={s["thumbnail-list"]}>
                    {imgList}
                </div>
                <div className={s["main-image"]}>
                    <img className={s["product-image"]} src={images[0]} />
                </div>
            </div>
            <div className={s["card-body"]}>
                <h2 className={s.name}>{name}</h2>
                <p className={s.description}>{description}</p>
                <CartButton counter={0} />
            </div>
        </div>
    )
}
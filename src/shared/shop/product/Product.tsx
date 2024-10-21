import React from "react";
import style from './product.module.scss';
import { CartButton } from "../cartbutton/CartButton";

interface ProductProps {
    price: number;
    images: string[];
    name: string;
    category: string;
    description: string;
}

export const Product: React.FC<ProductProps> = ({ price, images, category, name, description }) => {
    var imgList = [];

    for (var i = 0; i < images.length; i++) {
        imgList.push(<img src={images[i]} />);
    }

    return (
        <div className={style.card}>
            <div className={style["card-header"]}>
                <span className={style["category"]}>{category}</span>
                <span className={style.price}>{price}</span>
            </div>
            <div className={style["container"]}>
                <div className={style["thumbnail-list"]}>
                    {imgList}
                </div>
                <div className={style["main-image"]}>
                    <img className={style["product-image"]} src={images[0]} />
                </div>
            </div>
            <div className={style["card-body"]}>
                <h2 className={style.name}>{name}</h2>
                <p className={style.description}>{description}</p>
                <CartButton counter={0} />
            </div>
        </div>
    )
}
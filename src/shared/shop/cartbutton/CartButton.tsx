import React from 'react';
import style from './cartbutton.module.scss';

export interface CartButtonProps {
    counter: number
}

export const CartButton: React.FC<CartButtonProps> = ({ counter }) => {
    if (counter > 0)
        return (
            <div className={style.inputContainer}>
                <button>-</button>
                <input type="text" value={counter}></input>
                <button>+</button>
            </div >
        )
    else
        return (
            <button className={style.cartButton}>
                Add to cart
            </button>
        )
}

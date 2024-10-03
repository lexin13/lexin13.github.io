import React from 'react';
import s from './cartbutton.module.scss';

export interface CartButtonProps {
    counter: number
}

export function CartButton({ counter }: CartButtonProps) {
    if (counter > 0)
        return (
            <div className={s.inputContainer}>
                <button>-</button>
                <input type="text" value={counter}></input>
                <button>+</button>
            </div >
        )
    else
        return (
            <button className={s.cartButton}>
                Add to cart
            </button>
        )
}

import React from 'react';
import s from './cartbutton.module.scss';

interface ButtonProps {
    counter: number
}

export function CartButton({ counter }: ButtonProps) {
    if (counter > 0)
        return (
            <div className={s.inputContainer}>
                <button>+</button>
                <input type="text" value={counter}></input>
                <button>-</button>
            </div >
        )
    else
        return (
            <button className={s.cartButton}>
                Add to cart
            </button>
        )
}

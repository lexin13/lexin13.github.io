import type { Meta } from '@storybook/react';
import { CartProduct } from './CartProduct';
import image from '../../../stories/assets/cherry1.png';

const meta: Meta<typeof CartProduct> = {
    title: 'Example/Shop/CartProduct',
    component: CartProduct,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
    args: {
        price: 100,
        image: image,
        name: 'Product Name',
    },
};

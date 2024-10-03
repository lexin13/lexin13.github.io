import type { Meta } from '@storybook/react';
import { ShortProduct } from './ShortProduct';
import image from '../../../stories/assets/cherry1.png';

const meta: Meta<typeof ShortProduct> = {
    title: 'Example/Shop/ShortProduct',
    component: ShortProduct,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
    args: {
        price: 100,
        image: image,
        name: 'Product Name',
        description: 'This is a brief description of the item. This is a brief description of the item. This is a brief description of the item.'
    },
};

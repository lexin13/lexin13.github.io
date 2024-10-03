import type { Meta } from '@storybook/react';
import { Product } from './Product';
import image1 from '../../../stories/assets/cherry1.png';
import image2 from '../../../stories/assets/cherry2.png';

const meta: Meta<typeof Product> = {
    title: 'Example/Shop/Product',
    component: Product,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
    args: {
        price: 100,
        images: [image1, image2],
        name: 'Product Name',
        category: 'Category Name',
        description: 'This is a brief description of the item. This is a brief description of the item. This is a brief description of the item.'
    },
};

import type { Meta } from '@storybook/react';
import { Operation } from './Operation';

const meta: Meta<typeof Operation> = {
    title: 'Example/Banking/Operation',
    component: Operation,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
    args: {
        amount: 100,
        category: 'Category Name',
        name: 'Item Name',
        description: 'This is a brief description of the item. This is a brief description of the item. This is a brief description of the item.',
        date: '20.09.2024'
    },
};

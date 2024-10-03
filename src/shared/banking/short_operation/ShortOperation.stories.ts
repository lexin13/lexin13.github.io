import type { Meta } from '@storybook/react';
import { ShortOperation } from './ShortOperation';

const meta: Meta<typeof ShortOperation> = {
    title: 'Example/Banking/ShortOperation',
    component: ShortOperation,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
    args: {
        amount: 100,
        category: 'Category Name',
        name: 'Item Name',
        description: 'This is a brief description of the item. This is a brief description of the item. This is a brief description of the item.'
    },
};

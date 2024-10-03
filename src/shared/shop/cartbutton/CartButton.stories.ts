import type { Meta } from '@storybook/react';
import { CartButton } from './CartButton';

const meta: Meta<typeof CartButton> = {
    title: 'Example/Shop/CartButton',
    component: CartButton,
    tags: ['autodocs'],
};

export default meta;

export const ZeroValue = {
    args: {
        counter: 0
    },
};

export const OneValue = {
    args: {
        counter: 1
    },
};
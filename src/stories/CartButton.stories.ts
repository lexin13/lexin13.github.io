import type { Meta } from '@storybook/react';
import { CartButton } from '../shared/cartbutton/CartButton';

const meta: Meta<typeof CartButton> = {
    title: 'Example/CartButton',
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
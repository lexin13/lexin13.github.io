import type { Meta } from '@storybook/react';
import { OperationForm } from './OperationForm';

const meta: Meta<typeof OperationForm> = {
    title: 'Example/Forms/OperationForm',
    component: OperationForm,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
    args: {
    },
};

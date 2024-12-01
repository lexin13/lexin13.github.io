import type { Meta } from '@storybook/react';
import { OperationListWithIntersectionObserver } from '../OperationListWithIntersectionObserver';
import { createRandomOperation } from '../../operation/OperationTypes';

const meta: Meta<typeof OperationListWithIntersectionObserver> = {
    title: 'Example/Banking/OperationListWithIntersectionObserver',
    component: OperationListWithIntersectionObserver,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
    args: {
        operations: [
            createRandomOperation(new Date().toISOString()),
            createRandomOperation(new Date().toISOString()),
        ]
    }
};

import type { Meta } from '@storybook/react';
import { Collapse } from './Collapse';

const meta: Meta<typeof Collapse> = {
    title: 'Example/Common/Collapse',
    component: Collapse,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
    args: {
        opened: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate obcaecati voluptatibus ex mollitia, molestiae est voluptas accusamus sapiente repudiandae dignissimos! Dolor, minus quaerat nesciunt quia quibusdam magnam saepe libero temporibus.'
    },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';


const meta: Meta<typeof Layout> = {
    title: 'Example/Common/Layout',
    component: Layout,
    tags: ['autodocs']
};

export default meta;

export const Sample = {
    args: {}
}

type Story = StoryObj<typeof Layout>;

export const ModalWithChildren: Story = {
    args: {

    },
    render: ({ ...args }) =>
        <Layout {...args}>
            <div>
                <div><p>Lorem ipsum odor amet</p></div>
                <div><p>Lorem ipsum odor amet</p></div>
            </div>
        </Layout>
};
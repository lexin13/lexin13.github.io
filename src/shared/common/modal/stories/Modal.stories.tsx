import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../Modal';
import { CartButton } from '../../../shop/cartbutton/CartButton';
import { ModalOpeningButton } from './ModalOpeningButton';

const meta: Meta<typeof Modal> = {
    title: 'Example/Common/Modal',
    component: Modal,
    tags: ['autodocs']
};

export default meta;

export const VisibleModal = {
    args: {
        visible: true
    },
};

export const HiddenModal = {
    args: {
        visible: false
    },
};

type Story = StoryObj<typeof Modal>;

export const ModalWithChildren: Story = {
    args: {
        visible: true
    },
    render: ({ ...args }) =>
        <Modal {...args}>
            <CartButton counter={0} />
        </Modal>
};

export const ModalWithState: Story = {
    render: () => <ModalOpeningButton />
}
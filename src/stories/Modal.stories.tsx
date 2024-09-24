import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../shared/modal/Modal';
import { CartButton } from '../shared/cartbutton/CartButton';

const meta: Meta<typeof Modal> = {
    title: 'Example/Modal',
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
    render: () =>
        <Modal visible={true}>
            <CartButton counter={0} />
        </Modal>
};
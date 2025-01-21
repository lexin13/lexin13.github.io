import React from "react";
import { Modal } from "src/shared/common/modal/Modal";
import { OperationForm } from "src/pages/OperationForm/OperationForm";

export const ModalOperationForm: React.FC = () => {
    console.log('ModalOperationForm');
    const [isOpen, setIsOpen] = React.useState(true);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <Modal visible={isOpen} onClose={handleClose} >
            <OperationForm />
        </Modal>
    )
}
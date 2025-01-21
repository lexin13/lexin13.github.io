import React from "react";
import { Modal } from "src/shared/common/modal/Modal";
import { OperationForm } from "src/pages/OperationForm/OperationForm";
import style from './ModalOperationForm.module.scss';

export const ModalOperationForm: React.FC = () => {
    console.log('ModalOperationForm');
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputText, setInputText] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div className={style["modal_opening_button"]}>
            <input type="text" value={inputText} onChange={handleChange} />
            <button onClick={handleOpen}>Open modal</button>
            <Modal visible={isOpen} onClose={handleClose} >
                <OperationForm />
            </Modal>
        </div>
    )
}
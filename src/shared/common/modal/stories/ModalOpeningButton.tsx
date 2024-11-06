import React from "react";
import { Modal } from "../Modal";
import style from './modal_opening_button.module.scss';

export const ModalOpeningButton: React.FC = () => {
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
                <span>{inputText}</span>
            </Modal>
        </div>
    )
}
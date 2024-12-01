import React from 'react';
import style from './modal.module.scss';
import cn from 'clsx';
import { createPortal } from 'react-dom';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    if (!visible) return null;

    return createPortal(
        <div className={cn(style.modal, { [style.modalHidden]: !visible })}>
            <div className={style.modalContent}>
                <span className={style.close} onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>, document.body
    );
}
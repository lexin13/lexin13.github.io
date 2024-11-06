import React from 'react';
import style from './modal.module.scss';
import cn from 'clsx';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    return (
        <div className={cn(style.modal, { [style.modalHidden]: !visible })}>
            <div className={style.modalContent}>
                <span className={style.close} onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
}
import React from 'react';
import style from './modal.module.scss';
import cn from 'clsx';

interface ModalProps {
    visible: boolean;
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, children }) => {
    return (
        <div className={cn(style.modal, { [style.modalHidden]: !visible })}>
            <div className={style.modalContent}>
                <span className={style.close}>&times;</span>
                {children}
            </div>
        </div>
    );
}
import React, { Children } from 'react';
import s from './modal.module.scss';
import cn from 'clsx';

interface ModalProps {
    visible: boolean;
    children?: React.ReactNode;
}

export function Modal({ visible, children }: ModalProps) {
    return (
        <div className={cn(s.modal, { [s.modalHidden]: !visible })}>
            <div className={s.modalContent}>
                <span className={s.close}>&times;</span>
                {children}
            </div>
        </div>
    );
}
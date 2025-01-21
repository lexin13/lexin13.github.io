import React from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileForm } from 'src/pages/ProfileForm/ProfileForm';
import { OperationsForm } from 'src/pages/OperationsForm/OperationsForm';
import { ModalOperationForm } from 'src/pages/ModalOperationForm/ModalOperationForm';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from 'src/pages/LoginForm/LoginForm';

export const Routing: React.FC = () => {
    const location = useLocation();
    const state = location.state as { backgroundLocation?: Location };
    console.log(location);
    console.log(state);
    return (
        <>
            <Routes location={state?.backgroundLocation || location}>
                <Route path="/" element={<LoginForm />} />
                <Route path="/profile" element={<ProfileForm />} />
                <Route path="/operations" element={<OperationsForm />} />
            </Routes>
            {
                state?.backgroundLocation && (
                    <Routes>
                        <Route path="/modals" element={<ModalOperationForm />} />
                        <Route path="/operations/edit/:id" element={<ModalOperationForm />} />
                    </Routes>
                )
            }
        </>
    );
};
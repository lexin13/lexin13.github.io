import React from 'react';
import './App.css';
import { ThemeProvider } from '../shared/common/theme/ThemeProvider';
import { LanguageProvider } from '../shared/common/language/LanguageProvider';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { LoginForm } from 'src/pages/LoginForm/LoginForm';
import { ProfileForm } from 'src/pages/ProfileForm/ProfileForm';
import { OperationsForm } from 'src/pages/OperationsForm/OperationsForm';
import { Layout } from 'src/shared/common/layout/Layout';
import { Modal } from 'src/shared/common/modal/Modal';
import { OperationForm } from 'src/pages/OperationForm/OperationForm';
import { ModalOperationForm } from 'src/pages/ModalOperationForm/ModalOperationForm';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ProfileForm />} />
              <Route path="/profile" element={<ProfileForm />} />
              <Route path="/operations" element={<OperationsForm />}>
                <Route path='edit/:id' element={<ModalOperationForm />} />
              </Route>
            </Routes>
          </Layout>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>      
  );
}

export default App;


import React from 'react';
import './App.css';
import { ThemeProvider } from '../shared/common/theme/ThemeProvider';
import { LanguageProvider } from '../shared/common/language/LanguageProvider';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { LoginForm } from 'src/pages/LoginForm/LoginForm';
import { ProfileForm } from 'src/pages/ProfileForm/ProfileForm';
import { OperationForm } from 'src/pages/OperationForm/OperationForm';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/operation" element={<OperationForm />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;


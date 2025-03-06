import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
import ForgotPassword from './components/ForgotPassword';
import ProfilePage from './components/ProfilePage';
import ContactForm from './components/ContactForm';
import EditBasicDetailsModal from './components/EditBasicDetailsModal';
import LanguagesKnown from './components/LanguagesKnown';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/EditBasicDetailsModal" element={<EditBasicDetailsModal />} />
        <Route path="/LanguagesKnown" element={<LanguagesKnown />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

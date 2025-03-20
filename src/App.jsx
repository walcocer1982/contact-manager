<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactsLayout from './pages/ContactsLayout';
import ContactsPage from './pages/ContactsPage';
import FilteredContactsPage from './pages/FilteredContactsPage';
import ContactDetailPage from './pages/ContactDetailPage';
import NewContactPage from './pages/NewContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
=======
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetail from './components/ContactDetail';
>>>>>>> lab07-routing

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<HomePage />} />
            
            {/* Rutas anidadas para contactos */}
            <Route path="/contacts" element={<ContactsLayout />}>
              <Route index element={<ContactsPage />} />
              <Route path=":type" element={<FilteredContactsPage />} />
            </Route>
            
            {/* Ruta de detalle separada */}
            <Route path="/contact/:id" element={<ContactDetailPage />} />
            <Route path="/new-contact" element={<NewContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
=======
            <Route path="/" element={
              <div className="welcome-page">
                <h1>Bienvenido a tu Agenda de Contactos</h1>
                <p>Selecciona una opción del menú para comenzar</p>
              </div>
            } />
            <Route path="/contacts" element={<ContactList />} />
            <Route path="/contacts/:id" element={<ContactDetail />} />
            <Route path="/new-contact" element={<ContactForm />} />
            <Route path="*" element={
              <div className="not-found">
                <h2>404: Página no encontrada</h2>
                <p>La página que buscas no existe.</p>
              </div>
            } />
>>>>>>> lab07-routing
          </Routes>
        </main>
      </div>
    </Router>
  );
}

<<<<<<< HEAD
// Componente de carga mejorado para usar en tus páginas
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Cargando...</p>
  </div>
);

=======
>>>>>>> lab07-routing
export default App;
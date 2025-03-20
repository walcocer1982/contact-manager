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

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Componente de carga mejorado para usar en tus páginas
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Cargando...</p>
  </div>
);

export default App;
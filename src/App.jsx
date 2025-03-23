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
import { saveContact } from './services/contactService';

function App() {
  const handleAddContact = async (newContactData) => {
    try {
      const savedContact = await saveContact(newContactData);
      console.log('Nuevo contacto guardado:', savedContact);
      // Aquí puedes actualizar el estado o hacer algo más con el nuevo contacto
    } catch (error) {
      console.error('Error al agregar contacto:', error);
    }
  };

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
            <Route path="/new-contact" element={<NewContactPage onAddContact={handleAddContact} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
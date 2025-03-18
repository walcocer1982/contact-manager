import { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import './ContactList.css';

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [highlightedContact, setHighlightedContact] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  const handleClearContact = () => {
    setHighlightedContact(null);
  };

  const saveContact = async (contactData) => {
    setIsSaving(true);
    setErrorMessage('');
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      });
      
      if (!response.ok) {
        throw new Error(getErrorMessage(null, response.status));
      }
      
      const savedContact = await response.json();
      console.log('Contacto guardado:', savedContact);
      return savedContact;
    } catch (error) {
      console.error('Error al guardar contacto:', error);
      setErrorMessage(getErrorMessage(error, error.response?.status));
      throw error;
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddContact = async (newContact) => {
    try {
      const savedContact = await saveContact(newContact);
      setContacts(prevContacts => [...prevContacts, savedContact]);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(`Error al guardar el contacto: ${error.message}`);
    }
  };

  const getErrorMessage = (error, status) => {
    if (!navigator.onLine) {
      return 'No hay conexión a internet. Por favor, verifica tu conexión.';
    }
    
    switch (status) {
      case 404:
        return 'No se encontró el recurso solicitado.';
      case 500:
        return 'Error en el servidor. Por favor, intenta más tarde.';
      case 403:
        return 'No tienes permiso para acceder a estos datos.';
      default:
        return 'Ocurrió un error al cargar los contactos. Por favor, intenta de nuevo.';
    }
  };

  const fetchContacts = async () => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const response = await fetch(API_URL);
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(getErrorMessage(null, response.status));
      }
      
      const data = await response.json();
      console.log('Contactos cargados:', data);
      setContacts(data);
      setRetryCount(0); // Resetear el contador de intentos si la operación es exitosa
    } catch (error) {
      console.error('Error en fetchContacts:', error);
      setErrorMessage(getErrorMessage(error, error.response?.status));
      setContacts([]);
      setRetryCount(prev => prev + 1);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    console.log(`Reintentando cargar contactos... (Intento ${retryCount + 1})`);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="app-container">
      <Header />
      {isLoading && (
        <div className="loading-container">
          <p className="loading-text">
            <span className="loading-spinner">⭕</span>
            Cargando contactos...
          </p>
        </div>
      )}
      {isSaving && (
        <div className="loading-container">
          <p className="loading-text">
            <span className="loading-spinner">⭕</span>
            Guardando contacto...
          </p>
        </div>
      )}
      {errorMessage && (
        <div className="error-container">
          <p className="error-text">
            <span className="error-icon">⚠️</span>
            {errorMessage}
          </p>
          <div className="retry-info">
            {retryCount > 0 && (
              <span className="retry-count">
                Intentos: {retryCount}
              </span>
            )}
            <button 
              className="retry-button"
              onClick={handleRetry}
            >
              🔄 Reintentar
            </button>
          </div>
        </div>
      )}
      <div className="main-content">
        <div className="column">
          <ContactForm onAddContact={handleAddContact} />
        </div>
        <div className="column">
          <ContactList contacts={contacts} onSelectContact={setHighlightedContact} />
        </div>
        <div className="column">
          {highlightedContact && (
            <ContactPinned contact={highlightedContact} onClearContact={handleClearContact} />
          )}
        </div>
      </div>
    </div>
  );
}
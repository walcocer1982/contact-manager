import { useState, useEffect } from 'react';
import ContactList from '../components/ContactList';
import { getContacts } from '../services/contactService';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        const data = await getContacts();
        setContacts(data);
      } catch (err) {
        console.error('Error al cargar contactos:', err);
        setError('No se pudieron cargar los contactos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleSaveToLocalStorage = () => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      setSaveSuccess(true);
      
      // Ocultar el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
      setError('No se pudieron guardar los contactos');
    }
  };

  if (isLoading) return <div className="loading">Cargando contactos...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="contacts-page-container">
      <div className="contacts-header">
        <h2>Agenda de Contactos</h2>
        <button 
          onClick={handleSaveToLocalStorage}
          className="save-button"
        >
          💾 Guardar Contactos
        </button>
      </div>
      
      {saveSuccess && (
        <div className="success-message">
          ✅ Contactos guardados correctamente en LocalStorage
        </div>
      )}
      
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;

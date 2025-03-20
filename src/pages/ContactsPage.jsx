import { useState, useEffect } from 'react';
import ContactList from '../components/ContactList';
import { getContacts } from '../services/contactService';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) return <div className="loading">Cargando contactos...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return <ContactList contacts={contacts} />;
};

export default ContactsPage;

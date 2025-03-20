import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContactList from '../components/ContactList';
import { getContacts } from '../services/contactService';

const FilteredContactsPage = () => {
  const { type } = useParams();
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilteredContacts = async () => {
      try {
        setIsLoading(true);
        const allContacts = await getContacts();
        
        // Filtrar contactos según el tipo de la ruta
        if (type) {
          const filtered = allContacts.filter(contact => 
            contact.type.toLowerCase() === type.toLowerCase()
          );
          setContacts(filtered);
        } else {
          setContacts(allContacts);
        }
        
      } catch (err) {
        console.error('Error al cargar contactos:', err);
        setError('No se pudieron cargar los contactos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilteredContacts();
  }, [type]);

  if (isLoading) return <div className="loading">Cargando contactos...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="filtered-contacts">
      <h3>
        {type 
          ? `Contactos de tipo: ${type.charAt(0).toUpperCase() + type.slice(1)}` 
          : 'Todos los contactos'}
      </h3>
      
      {contacts.length === 0 ? (
        <p>No hay contactos en esta categoría</p>
      ) : (
        <ContactList contacts={contacts} />
      )}
    </div>
  );
};

export default FilteredContactsPage;

import ContactForm from '../components/ContactForm';
import { saveContact } from '../services/contactService';

const NewContactPage = ({ onAddContact }) => {
  const handleAddContact = async (newContactData) => {
    try {
      const savedContact = await saveContact(newContactData);
      if (savedContact) onAddContact(savedContact);
    } catch (error) {
      console.error('Error al agregar contacto:', error);
    }
  };

  return (
    <div className="new-contact-page">
      <h1>Agregar Nuevo Contacto</h1>
      <ContactForm onAddContact={handleAddContact} />
    </div>
  );
};

export default NewContactPage;

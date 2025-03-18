import { useState } from 'react';
import ContactItem from './ContactItem';
import '../ContactList.css';

const ContactList = ({ contacts, onSelectContact }) => {
  const [isCardView, setIsCardView] = useState(false);

  const toggleView = () => {
    setIsCardView(!isCardView);
  };

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <button onClick={toggleView}>
        {isCardView ? 'Cambiar a Vista Lista' : 'Cambiar a Vista Tarjeta'}
      </button>
      {isCardView ? (
        <div className="card-container">
          {contacts.map(contact => (
            <div key={contact.id} className="card">
              <p>Nombre: {contact.fullname}</p>
              <p>Teléfono: {contact.phonenumber}</p>
              <p>Email: {contact.email}</p>
              <p>Tipo: {contact.type}</p>
              <button onClick={() => onSelectContact(contact)}>Seleccionar</button>
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} onSelectContact={onSelectContact} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
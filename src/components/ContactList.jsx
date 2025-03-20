import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD

const ContactList = ({ contacts = [] }) => {
  const navigate = useNavigate();
=======
import ContactItem from './ContactItem';
import '../ContactList.css';

const ContactList = ({ contacts }) => {
>>>>>>> lab07-routing
  const [isCardView, setIsCardView] = useState(false);
  const navigate = useNavigate();

  const toggleView = () => {
    setIsCardView(!isCardView);
  };

  const handleContactClick = (contactId) => {
    navigate(`/contacts/${contactId}`);
  };

  return (
    <div className="contact-list">
      <button onClick={toggleView} className="view-toggle">
        {isCardView ? 'Cambiar a Vista Lista' : 'Cambiar a Vista Tarjeta'}
      </button>
<<<<<<< HEAD
      
      {contacts.length === 0 ? (
        <p>No hay contactos disponibles</p>
      ) : (
        <div className={isCardView ? 'card-container' : 'list-container'}>
          {contacts.map(contact => (
            <div 
              key={contact.id} 
              className={isCardView ? 'contact-card' : 'contact-item'}
              onClick={() => handleContactClick(contact.id)}
            >
              <h3>{contact.fullname}</h3>
              <p>Teléfono: {contact.phonenumber}</p>
=======
      {isCardView ? (
        <div className="card-container">
          {contacts && contacts.map(contact => (
            <div 
              key={contact.id} 
              className="card"
              onClick={() => handleContactClick(contact.id)}
            >
              <p>Nombre: {contact.name}</p>
              <p>Teléfono: {contact.phone}</p>
>>>>>>> lab07-routing
              <p>Email: {contact.email}</p>
              <p>Tipo: {contact.type}</p>
            </div>
          ))}
        </div>
<<<<<<< HEAD
=======
      ) : (
        <ul>
          {contacts && contacts.map(contact => (
            <ContactItem 
              key={contact.id} 
              contact={contact}
              // Cambio: usar onSelectContact para que sea coherente con el componente
              onSelectContact={() => handleContactClick(contact.id)}
            />
          ))}
        </ul>
>>>>>>> lab07-routing
      )}
    </div>
  );
};

export default ContactList;
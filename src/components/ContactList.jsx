import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactList = ({ contacts = [] }) => {
  const navigate = useNavigate();
  const [isCardView, setIsCardView] = useState(false);

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
              <p>Email: {contact.email}</p>
              <p>Tipo: {contact.type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
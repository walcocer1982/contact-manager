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
      <h2>Contact List</h2>
      <button onClick={toggleView}>
        {isCardView ? 'Switch to List View' : 'Switch to Card View'}
      </button>
      {isCardView ? (
        <div className="card-container">
          {contacts.map(contact => (
            <div key={contact.id} className="card">
              <p>Name: {contact.name}</p>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
              <p>Type: {contact.type}</p>
              <button onClick={() => onSelectContact(contact)}>Select</button>
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
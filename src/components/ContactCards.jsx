import React from 'react';

const ContactCards = ({ contacts, onContactClick }) => {
  return (
    <div className="card-container">
      {contacts.map(contact => (
        <div key={contact.id} className="card" onClick={() => onContactClick(contact)}>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
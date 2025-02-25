import React from 'react';

const ContactList = ({ contacts, onContactClick }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => onContactClick(contact)}>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
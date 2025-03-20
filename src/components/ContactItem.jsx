import React from 'react';

const ContactItem = ({ contact, onSelectContact }) => {
  return (
    <li className="card">
      <p>Nombre: {contact.name}</p>
      <p>Teléfono: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Tipo: {contact.type}</p>
      <button onClick={onSelectContact}>Select</button>
    </li>
  );
};

export default ContactItem;
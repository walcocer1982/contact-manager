import React from 'react';

const ContactPinned = ({ contact, onClearContact }) => {
  return (
    <div>
      <h2>Contacto Fijado</h2>
      <p>Nombre: {contact.fullname}</p>
      <p>Teléfono: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Tipo: {contact.type}</p>
      <button onClick={onClearContact}>Limpiar</button>
    </div>
  );
};

export default ContactPinned;
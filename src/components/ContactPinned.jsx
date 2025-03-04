import React from 'react';

const ContactPinned = ({ contact, onClearContact }) => {
  return (
    <div>
      <h2>Pinned Contact</h2>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Type: {contact.type}</p>
      <button onClick={onClearContact}>Clear</button>
    </div>
  );
};

export default ContactPinned;
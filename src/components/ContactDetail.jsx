import React from 'react';

const ContactDetail = ({ contact }) => {
  return (
    <div>
      <h2>Contact Detail</h2>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ContactDetail;
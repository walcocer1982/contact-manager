

const ContactItem = ({ contact, onSelectContact }) => {
  return (
    <li className="card">
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Type: {contact.type}</p>
      <button onClick={() => onSelectContact(contact)}>Select</button>
    </li>
  );
};

export default ContactItem;
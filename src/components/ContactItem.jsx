const ContactItem = ({ contact, onSelectContact }) => {
  return (
    <li className="card">
      <p>Nombre: {contact.fullname}</p>
      <p>Teléfono: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Tipo: {contact.type}</p>
      <button onClick={() => onSelectContact(contact)}>Seleccionar</button>
    </li>
  );
};

export default ContactItem;
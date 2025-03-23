import { useNavigate } from 'react-router-dom';

const ContactItem = ({ contact }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact/${contact.id}`); // Redirige a la página de detalles del contacto
  };

  return (
    <div onClick={handleClick} className="contact-item">
      <h3>{contact.fullname}</h3>
      <p>Teléfono: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Tipo: {contact.type}</p>
    </div>
  );
};

export default ContactItem;
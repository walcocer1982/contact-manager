import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContactById } from '../services/contactService';

const ContactDetailPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await getContactById(id);
        setContact(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  // Formatear la fecha de cumpleaños
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h1>Detalles del Contacto</h1>
      <p>Teléfono: {contact.phonenumber || 'No disponible'}</p>
      <p>Email: {contact.email}</p>
      <p>Compañía: {contact.company}</p>
      <p>Cumpleaños: {formatDate(contact.birthday)}</p>
      <p>Tipo: {contact.type}</p>
    </div>
  );
};

export default ContactDetailPage;

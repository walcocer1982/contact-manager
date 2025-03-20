import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ContactDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactDetail = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
        if (!response.ok) throw new Error('Contacto no encontrado');
        const data = await response.json();
        setContact(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetail();
  }, [id]);

  if (loading) return <div>Cargando detalles del contacto...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!contact) return <div>No se encontró el contacto</div>;

  return (
    <div className="contact-detail">
      <h2>Detalles del Contacto</h2>
      <div className="detail-card">
        <h3>{contact.fullname}</h3>
        <div className="detail-info">
          <p><strong>Teléfono:</strong> {contact.phonenumber}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Tipo:</strong> {contact.type}</p>
        </div>
        <button onClick={() => navigate('/contacts')} className="back-button">
          ← Volver a la lista
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;

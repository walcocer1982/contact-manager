import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getContactById } from '../services/contactService';

const ContactDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactDetail = async () => {
      try {
        setLoading(true);
        const data = await getContactById(id);
        setContact(data);
      } catch (err) {
        console.error('Error al cargar detalle de contacto:', err);
        setError('No se pudo cargar la información del contacto');
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetail();
  }, [id]);

  if (loading) return <div className="loading">Cargando detalles del contacto...</div>;
  
  if (error) return (
    <div className="error-container">
      <p>{error}</p>
      <button onClick={() => navigate('/contacts')} className="back-button">
        Volver a la lista
      </button>
    </div>
  );

  if (!contact) return (
    <div className="not-found-detail">
      <h2>Contacto no encontrado</h2>
      <p>El contacto que buscas no existe o ha sido eliminado.</p>
      <button onClick={() => navigate('/contacts')} className="back-button">
        Volver a la lista
      </button>
    </div>
  );

  return (
    <div className="contact-detail-page">
      <h2>Detalles del Contacto</h2>
      
      <div className="contact-detail-card">
        <h3>{contact.fullname}</h3>
        
        <div className="contact-info-group">
          <span className="info-label">Teléfono:</span>
          <span className="info-value">{contact.phonenumber}</span>
        </div>
        
        <div className="contact-info-group">
          <span className="info-label">Email:</span>
          <span className="info-value">{contact.email}</span>
        </div>
        
        <div className="contact-info-group">
          <span className="info-label">Tipo:</span>
          <span className="info-value">{contact.type}</span>
        </div>
        
        <div className="contact-actions">
          <button 
            onClick={() => navigate('/contacts')} 
            className="back-button"
          >
            ← Volver a la lista
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;

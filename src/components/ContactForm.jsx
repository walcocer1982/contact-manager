import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    type: 'social'
  });

  const [errors, setErrors] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    type: ''
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'fullname':
        return value.length < 3 ? 'El nombre debe tener al menos 3 caracteres' : '';
      case 'phonenumber':
        return !/^\d{9,10}$/.test(value) ? 'El teléfono debe tener 9-10 dígitos' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email no válido' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: validateField(name, value)
    }));
  };

  const isFormValid = () => {
    return !Object.values(errors).some(error => error !== '') &&
           !Object.entries(formData).some(([key, value]) => key !== 'type' && value === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onAddContact(formData);
      setFormData({
        fullname: '',
        phonenumber: '',
        email: '',
        type: 'personal'
      });
      setErrors({
        fullname: '',
        phonenumber: '',
        email: '',
        type: ''
      });
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Agregar Nuevo Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Ingresa el nombre completo"
              className={errors.fullname ? 'input-error' : ''}
              required
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Ingresa el número de teléfono"
              className={errors.phonenumber ? 'input-error' : ''}
              required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa el correo electrónico"
              className={errors.email ? 'input-error' : ''}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="type">Tipo de Contacto</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="social">Social</option>
              <option value="trabajo">Trabajo</option>
              <option value="familia">Familia</option>
            </select>
          </div>
        </div>
        
        <button 
          type="submit" 
          className={`submit-button ${!isFormValid() ? 'button-disabled' : ''}`}
          disabled={!isFormValid()}
        >
          <span className="button-icon">💾</span>
          Guardar Contacto
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 
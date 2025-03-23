import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('familia');
  const [company, setCompany] = useState('');
  const [birthday, setBirthday] = useState('');
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!fullname) newErrors.fullname = 'El nombre es obligatorio';
    if (!phonenumber) newErrors.phonenumber = 'El teléfono es obligatorio';
    if (!email) newErrors.email = 'El email es obligatorio';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSaving(true);

    try {
      const response = await fetch('https://entermocks.vercel.app/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, phonenumber, email, type, company, birthday })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al guardar el contacto');
      }

      const newContact = await response.json();
      onAddContact(newContact);

      setFullname('');
      setPhonenumber('');
      setEmail('');
      setType('familia');
      setCompany('');
      setBirthday('');
      setErrors({});
      setSubmitError('');
    } catch (error) {
      console.error('Error:', error);
      setSubmitError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre Completo:</label>
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        {errors.fullname && <p>{errors.fullname}</p>}
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="text" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
        {errors.phonenumber && <p>{errors.phonenumber}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Compañía:</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div>
        <label>Cumpleaños:</label>
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </div>
      <div>
        <label>Tipo:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="familia">Familia</option>
          <option value="social">Social</option>
          <option value="trabajo">Trabajo</option>
        </select>
      </div>
      <button type="submit" disabled={!fullname || !phonenumber || !email || Object.keys(errors).length > 0 || isSaving}>
        {isSaving ? 'Guardando...' : 'Guardar'}
      </button>
      {submitError && <p className="error-message">{submitError}</p>}
    </form>
  );
};

export default ContactForm; 
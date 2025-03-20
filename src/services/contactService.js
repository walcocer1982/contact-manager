const API_URL = 'https://entermocks.vercel.app/api/contacts';

export const getContacts = async () => {
  try {
    console.log('Fetching contacts from:', API_URL); // Para debug
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Contactos recibidos:', data.length); // Para debug
    return data;
  } catch (error) {
    console.error('Error en getContacts:', error);
    throw error;
  }
};

export const saveContact = async (contactData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });
    
    if (!response.ok) {
      throw new Error('Error al guardar contacto');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error en saveContact:', error);
    throw error;
  }
};

export const getContactById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el contacto');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getContactById:', error);
    throw error;
  }
};

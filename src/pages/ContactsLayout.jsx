import { Outlet, NavLink } from 'react-router-dom';

const ContactsLayout = () => {
  return (
    <div className="contacts-layout">
      <h2>Agenda de Contactos</h2>
      
      <div className="contacts-nav">
        <NavLink 
          to="/contacts" 
          end
          className={({isActive}) => isActive ? "contacts-tab active" : "contacts-tab"}
        >
          Todos
        </NavLink>
        <NavLink 
          to="/contacts/familia" 
          className={({isActive}) => isActive ? "contacts-tab active" : "contacts-tab"}
        >
          Familia
        </NavLink>
        <NavLink 
          to="/contacts/trabajo" 
          className={({isActive}) => isActive ? "contacts-tab active" : "contacts-tab"}
        >
          Trabajo
        </NavLink>
        <NavLink 
          to="/contacts/social" 
          className={({isActive}) => isActive ? "contacts-tab active" : "contacts-tab"}
        >
          Social
        </NavLink>
      </div>
      
      <div className="contacts-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ContactsLayout;

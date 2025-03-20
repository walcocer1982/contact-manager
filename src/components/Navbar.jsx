<<<<<<< HEAD
=======
// src/components/Navbar.jsx
>>>>>>> lab07-routing
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
<<<<<<< HEAD
      <div className="navbar-container">
        <h1 className="navbar-logo">Agenda de Contactos</h1>
        <div className="nav-menu">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/contacts" 
            className={({isActive}) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contactos
          </NavLink>
          <NavLink 
            to="/new-contact" 
            className={({isActive}) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Nuevo Contacto
          </NavLink>
        </div>
      </div>
=======
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        end
      >
        Inicio
      </NavLink>
      <NavLink 
        to="/contacts" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Agenda de Contactos
      </NavLink>
      <NavLink 
        to="/new-contact" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Nuevo Contacto
      </NavLink>
>>>>>>> lab07-routing
    </nav>
  );
};

export default Navbar;
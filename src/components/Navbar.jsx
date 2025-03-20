import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar;
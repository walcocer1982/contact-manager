import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="back-button">Volver al inicio</Link>
    </div>
  );
};

export default NotFoundPage;

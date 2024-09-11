import React, { useState } from 'react';
import './Form.css'; // Para los estilos específicos

function Form() {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  const showLoginForm = () => {
    setShowLogin(true);
  };

  const handleBack = () => {
    // Aquí puedes añadir la lógica para manejar el botón "Atrás"
    console.log('Back button clicked');
  };

  return (
    <div className="form-container">
      {/* Botón Atrás */}
      <button className="btn btn-link back-button" onClick={handleBack}>
        Atrás
      </button>

      {/* Left Aside */}
      <aside className="form-left-aside">
        <div className="button-group">
          <button className="btn btn-primary" onClick={handleToggleForm}>
            {showLogin ? 'Show Register' : 'Show Login'}
          </button>
          <button className="btn btn-secondary" onClick={showLoginForm}>
            Always Show Login
          </button>
        </div>
        <div className="form-content">
          {showLogin ? (
            <form>
              <h2>Login Form</h2>
              <input type="text" placeholder="Username" className="form-control mb-3" />
              <input type="password" placeholder="Password" className="form-control mb-3" />
              <button className="btn btn-success" type="submit">Login</button>
            </form>
          ) : (
            <form>
              <h2>Register Form</h2>
              <input type="text" placeholder="Name" className="form-control mb-3" />
              <input type="email" placeholder="Email" className="form-control mb-3" />
              <input type="password" placeholder="Password" className="form-control mb-3" />
              <button className="btn btn-success" type="submit">Register</button>
            </form>
          )}
        </div>
      </aside>

      {/* Right Aside */}
      <aside className="form-right-aside">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img
          src="https://via.placeholder.com/300x200" // Imagen de ejemplo
          alt="About Us"
          className="img-fluid"
        />
      </aside>
    </div>
  );
}

export default Form;

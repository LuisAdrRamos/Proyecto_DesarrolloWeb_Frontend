import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faUser, faRightToBracket, faPlus } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false); // estado para manejar la visibilidad del menú
  const autenticado = localStorage.getItem('token');
  const rol = localStorage.getItem("tipoUsuario");

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "#f8f9fa", boxShadow: "1 -2px 5px rgba(0, 0, 0, 0)" }}>
      <Link className="navbar-brand" to="/">
        <div className="navbar-brand-content">
          <FontAwesomeIcon icon={faKeyboard} className="navbar-icon" />
          <span className="navbar-text">BestKeyboard</span>
        </div>
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleMenu} // 🔹 alternar el estado del menú
        aria-controls="navbarNav" 
        aria-expanded={menuAbierto} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className='nav-link' to='/tecladosOficina' onClick={cerrarMenu}>Teclados de Membrana</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/tecladosMecanicos' onClick={cerrarMenu}>Teclados Mecánicos</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/tecladosCustom' onClick={cerrarMenu}>Teclados Custom</Link>
          </li>
          {autenticado && rol === "admin" && (
            <li className="nav-item">
              <Link className='nav-link' to='/crear' onClick={cerrarMenu}>
                <FontAwesomeIcon icon={faPlus} className="navbar-icon" /> Crear Periférico
              </Link>
            </li>
          )}
        </ul>
        <div className="icons">
          {autenticado ? (
            <Link to="/perfil" className="profile" onClick={cerrarMenu}>
              <FontAwesomeIcon icon={faUser} className="navbar-icon" />
            </Link>
          ) : (
            <Link to="/login" className="login" onClick={cerrarMenu}>
              <FontAwesomeIcon icon={faRightToBracket} className="navbar-icon" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
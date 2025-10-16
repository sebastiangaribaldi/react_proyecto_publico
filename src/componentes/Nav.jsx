import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

const NavMenu = () => {
    return (
      <nav>
        <ul className= "lista">
          <li className= "item">
            <Link to="/" className= "link">Inicio</Link>
            <Link to="/joyas" className= "link">Joyas</Link>
          </li>
        </ul>
      </nav>
    );
}

export default NavMenu;
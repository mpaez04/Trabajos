import React from 'react';
import './Header.css';
import logo from '../logo.jpg';

function Header(){
return(
      <div>
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
        </header>
      </div>
    )
}

export default Header;
import React from 'react';
import './index.css';

const Navigation = () => {
  return (
    <header className="header container">
      <div className="logo">LOGO</div>
      
      <div className="buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </header>
  )
}

export default Navigation;
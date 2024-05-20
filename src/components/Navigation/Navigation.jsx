import React from 'react';
import './index.css';

const Navigation = () => {
  return (
    <nav className='nav-box'>
        <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Curriculum</a></li>
            <li><a href="#">Refund</a></li>
            <li><a href="#">Testimonials</a></li>
        </ul>
    </nav>
  )
}

export default Navigation;
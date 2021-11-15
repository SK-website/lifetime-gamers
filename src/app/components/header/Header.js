import React from 'react';
import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="container header-wrapper">
      <div className="logo">Playlist</div>
      <ul className="row-flex nav-list">
        <li className="nav-item bell">bell</li>
        <li className="nav-item nav-settings">settings</li>
        <li className="avatar">avatar</li>
      </ul>
    </div>
  </div>
);
export default Header;

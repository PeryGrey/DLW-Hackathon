import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './header.css';

export default function Header() {
  return (
    <nav className="nav-bar">
      <header className="container header">
        <div className="nav-name-div">
          <Link to="/" className="nav-name">
            NomNom
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link to="/login" className="main-nav-link underlines">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/calorie-counter"
                className="main-nav-link underlines"
                id="try-it-out"
              >
                Try It Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
}

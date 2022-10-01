import React, { useState } from 'react';

import './header.css';

export default function Header() {
  return (
    <nav class="nav-bar">
      <header class="container header">
        <div class="nav-name-div">
          <a class="nav-name" href="#">
            NomNom
          </a>
        </div>
        <nav class="main-nav">
          <ul class="main-nav-list">
            <li>
              <a class="main-nav-link underlines" href="#">
                Login
              </a>
            </li>
            <li>
              <a class="main-nav-link underlines" id="try-it-out" href="#">
                Try It Out
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
}

import React, { useState } from 'react';

import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Footer from './components/footer/Footer';

import './general.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import LandingPage from './components/landingPage/LandingPage';
import NutritionCounter from './components/nutritionCounter/NutritionCounter';

import './general.css';
import './general-query.css';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calorie-counter" element={<NutritionCounter />} />
      </Routes>
      <Footer />
    </div>
  );
}

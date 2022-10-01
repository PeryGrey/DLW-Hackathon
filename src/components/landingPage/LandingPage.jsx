import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './landingPage.css';

import noodles from '../../assets/pictures/noodles.jpg';

export default function LandingPage() {
  return (
    <div className="container landing-header">
      <div>
        <h2 className="topic-header">
          Journaling Your Food Journey with the <br /> Click of a 📸
        </h2>

        <p className="topic-text">
          We simplify your life by keeping track of your daily nutritional
          intake with a click of a picture, so that you can focus on just
          eating.
        </p>

        <Link to="/calorie-counter" className="landing--try-it-out">
          Try It Out!
        </Link>
      </div>

      <img className="noodles-pic" src={noodles} alt="pretty-hawker-noodles" />
    </div>
  );
}

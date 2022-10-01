import React, { useState } from 'react';

import './landingPage.css';

import noodles from '../../assets/pictures/noodles.jpg';

export default function LandingPage() {
  return (
    <div className="container landing-header">
      <div>
        <h2>
          Journaling Your Food Journey with the <br /> Click of a 📸
        </h2>

        <p>
          We simplify your life by keeping track of your daily nutritional
          intake with a click of a picture, so that you can focus on just
          eating.
        </p>

        <button className="landing--try-it-out">Try It Out!</button>
      </div>

      <img className="noodles-pic" src={noodles} alt="pretty-hawker-noodles" />
    </div>
  );
}

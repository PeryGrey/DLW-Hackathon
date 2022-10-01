import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import TakePhoto from './nutritionComponents/TakePhoto';

import DisplayFoodNutrients from './nutritionComponents/DisplayFoodNutrients';

import './nutritionCounter.css';

export default function NutritionCounter() {
  return (
    <div>
      <TakePhoto />
      <DisplayFoodNutrients />
    </div>
  );
}

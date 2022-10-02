import React, { useState, useRef, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './nutritionCounter.css';

// import TakePhoto from './nutritionComponents/TakePhoto';

import Webcam from 'react-webcam';

// camera imports
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

// piechart
import PieChart from './nutritionComponents/PieChart';

export default function NutritionCounter() {
  const ref = useRef(null);

  const handleClick = () => {};

  const [dataUri, setDataUri] = useState('');

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

    // smooth scrolling
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [webcamRef, setImgSrc]);

  function handleTakePhotoAnimationDone(dataUriadd) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }

  const isFullscreen = false;

  const [foodData, setFoodData] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  function capitalise(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('x-app-id', '7ef947a8');
    myHeaders.append('x-app-key', '3003e8379fce3819f7d6d4d918a2b8cb');
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    var urlencoded = new URLSearchParams();
    urlencoded.append('query', 'Nasi-Lemak');
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch(
      'https://trackapi.nutritionix.com/v2/natural/nutrients',
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFoodData([
          capitalise(data.foods[0].food_name),
          data.foods[0].nf_calories?.toFixed(1),
          data.foods[0].nf_total_fat?.toFixed(1),
          data.foods[0].nf_total_carbohydrate?.toFixed(1),
          data.foods[0].nf_protein?.toFixed(1),
          data.foods[0].nf_saturated_fat?.toFixed(1),
          data.foods[0].nf_cholesterol?.toFixed(1),
          data.foods[0].nf_sodium?.toFixed(1),
          data.foods[0].nf_dietary_fiber?.toFixed(1),
          data.foods[0].nf_sugars?.toFixed(1),
          data.foods[0].nf_potassium?.toFixed(1),
          data.foods[0].nf_p?.toFixed(1),
          data.foods[0].nf_nutrients?.toFixed(1),
        ]);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div>
      {/* <TakePhoto /> */}
      <div className="container take-photo-container">
        <h1 className="topic-header">Let's take a picture of your food!</h1>
        <div className="take-photo">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          {imgSrc && <img src={imgSrc} />}
        </div>
        <button className="capture-photo-btn" onClick={capture}>
          Capture photo
        </button>
      </div>

      {/* <DisplayFoodNutrients /> */}
      <div>
        <div className="container food-container" ref={ref}>
          <h1 className="topic-header">Nutrients provided by {foodData[0]}</h1>
          <div>
            <div>
              <div className="side-by-side">
                <div className="nutrition">
                  {/* section 1 */}
                  <h1 className="nutri-header ">Nutrition Facts</h1>
                  <p className="food-name nutri-text ">{foodData[0]}</p>
                  <p className=" nutri-text thick-bottom-border  ">
                    Serving Size: 1
                  </p>
                  {/* section 2 */}
                  <p className="nutri-text bold">Amount per serving</p>
                  <div className=" nutri-text thin-bottom-border split-row">
                    <p>
                      <span className="bold">Calories</span> {foodData[1]}
                    </p>
                  </div>
                  {/* section 3 */}

                  <div className=" nutri-text split-row">
                    <p>
                      <span className="bold">Total Fat </span> {foodData[2]}g
                    </p>
                  </div>
                  <div className="nutri-text split-row nutri-tab">
                    <p>Saturated Fat {foodData[5]}g</p>
                  </div>
                  <div className=" nutri-text split-row">
                    <p>
                      <span className="bold">Cholesterol </span> {foodData[6]}mg
                    </p>
                  </div>
                  <div className=" nutri-text split-row">
                    <p>
                      <span className="bold">Sodium </span> {foodData[7]}mg
                    </p>
                  </div>
                  <div className=" nutri-text split-row">
                    <p>
                      <span className="bold">Potassium </span> {foodData[10]}mg
                    </p>
                  </div>
                  <div className=" nutri-text split-row">
                    <p>
                      <span className="bold">Total Carbohydrates </span>{' '}
                      {foodData[2]}g
                    </p>
                  </div>
                  <div className="nutri-text split-row nutri-tab">
                    <p>Dietary Fiber {foodData[8]}g</p>
                  </div>
                  <div className="nutri-text nutri-tab">
                    <p>Sugars {foodData[9]}g</p>
                  </div>
                  <div className=" nutri-text">
                    <p>
                      <span className="bold">Protein </span> {foodData[4]}g
                    </p>
                  </div>
                </div>

                <PieChart
                  fats={foodData[1]}
                  carbs={foodData[2]}
                  protein={foodData[3]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

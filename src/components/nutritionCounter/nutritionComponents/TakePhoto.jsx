import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Webcam from "react-webcam";

// camera imports
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

// import ImagePreview from './ImagePreview';

export default function NutritionCounter() {
  const [dataUri, setDataUri] = useState('');

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  function handleTakePhotoAnimationDone(dataUriadd) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }

  const isFullscreen = false;

  return (
    <div className="container table-header">
      <h1 className="topic-header">Let's take a picture of your food!</h1>
      <div className = "container take-picture">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
      </div>
      <button className = "container button"onClick={capture}>Capture photo</button>
    </div>
  );
}

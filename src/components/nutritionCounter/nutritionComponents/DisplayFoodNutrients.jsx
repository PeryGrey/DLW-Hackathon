import React, { useState, useEffect } from 'react';

export default function DisplayFoodNutrients() {
  const method = 'GET';

  const reqURL = 'https://platform.fatsecret.com/rest/server.api';
  const reqURLEncode =
    'https%3A%2F%2Fplatform.fatsecret.com%2Frest%2Fserver.api ';

  // Normalized Parameters
  const consumer_key = '9d06666db4dc474ead1642240e987944';
  const signMethod = 'HMAC-SHA1';
  const timeStamp = Math.round(Date.now() / 1000);
  const nonce = Math.floor(Math.random() * 100);
  const version = '1.0';

  const methodPara = 'foods.search';
  const searchExpression = 'chicken-rice';
  // const foodID = ;
  const format = 'json';

  const normalPara = `format%3D${format}%26method%3D${method}%26oauth_consumer_key%3D${consumer_key}%26oauth_nonce%3D${nonce}%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D${timeStamp}%26oauth_version%3D1.0`;

  // const encodeMap = {
  //   ':': '3A',
  //   '/': '2F',
  //   '&': '26',
  //   '=': '3D',
  //   '?': '3F',
  // };

  useEffect(() => {
    fetch;
  });

  return (
    <div>
      <div className="container foodContainer">
        <h1 className="topic-header">Nutrients provided by </h1>
        <div className=" food-item">Chimken Rice</div>
        <div>
          <div>
            <p className="topic-text">Nutrition Summary</p>
            <div className="food-table">
              <div className="table-header">Cals</div>
              <div className="tableEl">hello</div>
              <div className="table-header">Fat</div>
              <div className="tableEl">hello</div>
              <div className="table-header">Carbs</div>
              <div className="tableEl">hello</div>
              <div className="table-header">Protein</div>
              <div className="tableEl">hello</div>
            </div>
          </div>
          <div className="nutrition">Nutrition Facts</div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

// import Chart.js
// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

export default function DisplayFoodNutrients() {
  const [foodData, setFoodData] = React.useState([]);

  const URL = `https://trackapi.nutritionix.com/v2/search/instant?query=grilled-cheese
  `;

  // useEffect(() => {
  //   fetch(
  //     'https://trackapi.nutritionix.com/v2/search/instant?query=grilled-cheese',
  //     {
  //       headers: {
  //         'x-app-id': '3c79e1db',
  //         'x-app-key': '2895bc848b17820c22877654ba3dd8a4',
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => data.common[0])
  //     .then((value) => console.log(value));

  //   // .then((data) => console.log(data[0]));
  // }, []);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('x-app-id', '3c79e1db');
    myHeaders.append('x-app-key', '979e5ed954ef9515c8412481074077d1');
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    var urlencoded = new URLSearchParams();
    urlencoded.append('query', 'apple');
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
      .then((result) => result)
      .then((data) =>
        setFoodData([
          data.foods[0]?.food_name,
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
        ])
      )
      .catch((error) => console.log('error', error));
  }, []);

  // pie chart
  // const data = {
  //   labels: ['Fat', 'Carbs', 'Protein'],
  //   datasets: [
  //     {
  //       label: 'My First Dataset',
  //       data: [foodData[2], foodData[3], foodData[4]],
  //       backgroundColor: [
  //         'rgb(255, 99, 132)',
  //         'rgb(54, 162, 235)',
  //         'rgb(255, 205, 86)',
  //       ],
  //       hoverOffset: 4,
  //     },
  //   ],
  // };

  // const ctx = document.getElementById('myChart');
  // const chart = new Chart(ctx, {
  //   type: 'pie',
  //   data: data,
  //   options: {
  //     onClick: (e) => {
  //       const canvasPosition = getRelativePosition(e, chart);

  //       // Substitute the appropriate scale IDs
  //       const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
  //       const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
  //     },
  //   },
  // });

  return (
    <div>
      <div className="container food-container">
        <div>
          <div>
            <h1 className="topic-header">
              Nutrients provided by {foodData[0]}
            </h1>
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
                  {/* #TODO */}
                  <p>Calories from Fat add value {}</p>
                </div>
                {/* section 3 */}
                <p className="nutri-text right-align bold">% Daily Value</p>
                <div className=" nutri-text split-row">
                  <p>
                    {/* #TODO */}
                    <span className="bold">Total Fat </span> {foodData[2]}g
                  </p>
                  <p>get serving size weight {}%</p>
                </div>
                <div className="nutri-text split-row nutri-tab">
                  <p>
                    {/* #TODO */}
                    Saturated Fat {foodData[5]}g
                  </p>
                  <p>get serving size weight {}%</p>
                </div>
                <div className=" nutri-text split-row">
                  <p>
                    {/* #TODO */}
                    <span className="bold">Cholesterol </span> {foodData[6]}mg
                  </p>
                  <p>get serving size weight {}%</p>
                </div>
                <div className=" nutri-text split-row">
                  <p>
                    {/* #TODO */}
                    <span className="bold">Sodium </span> {foodData[7]}mg
                  </p>
                  <p>get serving size weight {}%</p>
                </div>
                <div className=" nutri-text split-row">
                  <p>
                    {/* #TODO */}
                    <span className="bold">Potassium </span> {foodData[10]}mg
                  </p>
                  <p>get serving size weight {}%</p>
                </div>
                <div className=" nutri-text split-row">
                  <p>
                    {/* #TODO */}
                    <span className="bold">Total Carbohydrates </span>{' '}
                    {foodData[2]}g
                  </p>
                  <p>get serving size weight {}%</p>
                </div>
                <div className="nutri-text split-row nutri-tab">
                  <p>
                    {/* #TODO */}
                    Dietary Fiber {foodData[8]}g
                  </p>
                  <p>get serving size weight {}%</p>
                </div>
                <div className="nutri-text nutri-tab">
                  <p>
                    {/* #TODO */}
                    Sugars {foodData[9]}g
                  </p>
                </div>
                <div className=" nutri-text">
                  <p>
                    {/* #TODO */}
                    <span className="bold">Protein </span> {foodData[4]}g
                  </p>
                </div>
                <p className="foot-note">
                  * Percent Daily Values are based on a 2000 calorie diet.
                </p>
              </div>

              <div>
                <canvas id="myChart" width="400" height="400"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

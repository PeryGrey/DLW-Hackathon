import React, { useState, useEffect } from 'react';
import { Pie, defaults } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const color1 = '#222E50';
const color2 = '#007991';
const color3 = '#BDADEA';

export default function PieChart(props) {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [charOptions, setChartOptions] = useState({});

  return (
    <div>
      <Pie
        data={{
          labels: ['Fats', 'Protein', 'Carbs'],
          datasets: [
            {
              label: '# of votes',
              data: [props.fats, props.carbs, props.protein],
              backgroundColor: [color1, color2, color3],
              borderColor: [color1, color2, color3],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 30,
            },
          },
        }}
      />
    </div>
  );
}

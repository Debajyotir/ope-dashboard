import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJs} from "chart.js/auto"

const BarChartComponent = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'User',
        data: data.user1,
        backgroundColor: "#98D89E",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: 'Guest',
        data: data.user2,
        backgroundColor: "#EE8484",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales:{
        x:{
            grid:{
                display:false,
            },
            categorySpacing: 10,
        },
    },
    plugins: {
        legend: {
          display: false, 
        },
    }
  }

  

  return <Bar data={chartData} options={options} />;
};

export default BarChartComponent;

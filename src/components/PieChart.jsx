import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const PieChart = ({data}) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default PieChart;

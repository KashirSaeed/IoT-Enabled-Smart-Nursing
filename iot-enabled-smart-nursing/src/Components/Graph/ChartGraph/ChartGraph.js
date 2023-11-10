import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';


const ChartGraph = ({futureActivities,futureActivitiesProbabilities}) => {
  const activityLabels = futureActivities;
  const probabilities = futureActivitiesProbabilities;

  const chartOptions = {
    labels: activityLabels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    title: {
      text: 'Patient Activity Prediction', // Add your title here
      align: 'center',
      margin: 10, // You can adjust the margin
      offsetX: -40, // You can adjust the horizontal position
      offsetY: -1, // Reduce the vertical space between title and subtitle
      style: {
        fontSize: '15px', // You can adjust the font size
        fontWeight: 'bold', // You can adjust the font weight
        color: '#333', // You can adjust the text color
      },
    },
    subtitle: {
      text: 'Currently patient is running', // Add your subtitle here
      align: 'center',
      margin: 10, // You can adjust the margin
      offsetX: -40, // You can adjust the horizontal position
      offsetY: 30, // Increase the vertical space between subtitle and chart
      style: {
        fontSize: '12px', // You can adjust the font size
        color: '#666', // You can adjust the text color
      },
    },
  };

  const chartSeries = probabilities;
  return (
    <div className="probability-chart">
      <ReactApexChart options={chartOptions} series={chartSeries} type="pie" height={350} />
    </div>
  );
};

const domContainer = document.querySelector('#root');
ReactDOM.render(<ChartGraph />, domContainer);
export default ChartGraph;

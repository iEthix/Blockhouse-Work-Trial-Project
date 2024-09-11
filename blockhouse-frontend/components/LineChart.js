"use client";

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  //State to store the chart data
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Line Chart Data",
        data: [],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        pointRadius: 3,
        pointHoverRadius: 6,
        fill: false,
      },
    ],
  });

  //Effect hook to fetch line chart data from the server when the component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/linechart-data/")
      .then((response) => response.json()) //parse JSON response into JS object
      .then((data) => {
        console.log(data); //log data for debugging
        //Update state with the new data
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "Line Chart Data",
              data: data.data,
              borderColor: "rgba(75,192,192,1)",
              fill: false,
            },
          ],
        });
      })
      .catch(
        (error) => console.error("Error fetching line chart data:", error) //log error if fetching fails
      );
  }, []);

  //Chart configuration options
  const options = {
    scales: {
      x: {
        ticks: {
          color: "#000", //color for x-axis labels
          font: {
            size: 16, //font size for x-axis labels
            family: "Helvetica, Arial, sans-serif", //font family for x-axis labels
          },
        },
      },
      y: {
        ticks: {
          color: "#000", //color for y-axis labels
          font: {
            size: 16, //font size for y-axis labels
            family: "Helvetica, Arial, sans-serif", //font family for y-axis labels
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "blue", //color for legend labels
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  //Render the Line component with the specified data and options
  return <Line data={chartData} options={options} />;
};

export default LineChart; //export the component for use in other parts of the app

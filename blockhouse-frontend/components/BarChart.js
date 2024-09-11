"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = () => {
  //State to store the chart data
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Bar Chart Data",
        data: [],
        backgroundColor: "rgba(153,102,255,0.6)",
      },
    ],
  });

  //Effect hook to fetch bar chart data from the server when the component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/barchart-data/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data"); //handle response error
        }
        return response.json(); //parse JSON response into JS object
      })
      .then((data) => {
        //Log data for debugging
        console.log(data);
        //Update state with the new data
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "Bar Chart Data",
              data: data.data,
              backgroundColor: "rgba(153,102,255,0.6)", //background color for bars
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching bar chart data:", error)); //log error if fetching fails
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

  //Render the Bar component with the specified data and options
  return <Bar data={chartData} options={options} />;
};

export default BarChart; //export the component for use in other parts of the app

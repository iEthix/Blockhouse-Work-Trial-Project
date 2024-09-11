"use client";

import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  //State to store the chart data
  const [chartData, setChartData] = useState({
    labels: [], //labels as an empty array for the pie chart segments
    datasets: [
      {
        label: "Pie Chart Data", //label for the dataset used in tooltips and legends
        data: [], //empty array to be populated with data
        backgroundColor: ["red", "blue", "yellow"], //array of colors for each segment
      },
    ],
  });

  //Effect hook to fetch pie chart data from the server when the component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/piechart-data/") //fetch data from the specified URL
      .then((response) => response.json()) //parse the response as JSON
      .then((data) => {
        //Log the received data for debugging
        console.log(data);
        //Update chartData with the fetched data
        setChartData({
          labels: data.labels, //labels for pie chart segments
          datasets: [
            {
              label: "Pie Chart Data",
              data: data.data, //data values for each segment
              backgroundColor: ["red", "blue", "yellow"], //colors for each segment
            },
          ],
        });
      });
  }, []);

  //Render the Pie component with the specified data
  return <Pie data={chartData} />;
};

export default PieChart; //export the component for use in other parts of the app

"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CandlestickChart = () => {
  //State to store the chart data
  const [chartData, setChartData] = useState([]);

  //Effect hook to fetch candlestick data from the server when the component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/candlestick-data/")
      .then((response) => response.json()) //parse JSON response into JS object
      .then((data) => {
        console.log(data); //log data for debugging
        //Transform data to fit ApexCharts format
        setChartData(
          data.data.map((item) => ({
            x: new Date(item.x), //date object for the x-axis (date)
            y: [item.open, item.high, item.low, item.close], //candlestick data (open, high, low, close)
          }))
        );
      });
  }, []);

  //Chart configuration options
  const options = {
    chart: { type: "candlestick" },
    xaxis: {
      type: "datetime", //specify x-axis type as datetime for appropriate scaling
      labels: {
        style: {
          colors: [], //specify colors for the x-axis labels
          fontSize: "16px", //specify font size for the x-axis labels
          fontFamily: "Helvetica, Arial, sans-serif", //specify font family for the x-axis labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [], //specify colors for the y-axis labels
          fontSize: "16px", //specify font size for the y-axis labels
          fontFamily: "Helvetica, Arial, sans-serif", //specify font family for the y-axis labels
        },
      },
      tooltip: {
        enabled: true, //enable tooltips on y-axis hover
      },
    },
    tooltip: {
      enabled: true, //enable tooltips
      theme: "dark", //dark theme for tooltips
      style: {
        fontSize: "12px", //specify font size for tooltips
        colors: ["#F00"], //specify font color for tooltips
      },
    },
  };

  //Render the Chart component with the specified options and data
  return (
    <Chart
      options={options}
      series={[{ data: chartData }]} //series data for the chart
      type="candlestick" //type of chart to render
      height={600} //height of the chart
    />
  );
};

export default CandlestickChart; //export the component for use in other parts of the app

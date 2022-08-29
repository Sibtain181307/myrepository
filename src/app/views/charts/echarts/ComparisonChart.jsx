import React from "react";
import ReactEcharts from "echarts-for-react";

const ComparisonChart = ({ height, color = [] }) => {
  const option = {
    legend: {
      borderRadius: 0,
      orient: "horizontal",
      x: "right",
      data: ["Online", "Offline"],
    },
    grid: {
      left: "8px",
      right: "8px",
      bottom: "0",
      containLabel: true,
    },
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, .8)",
    },
    xAxis: [
      {
        type: "category",
        data: ["Jaddah", "Riyadh", "Dammam", "Tabuk"],
        axisTick: {
          alignWithLabel: true,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value}",
        },
        min: 0,
        max: 30,
        interval: 10,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          interval: "auto",
        },
      },
    ],

    series: [
      {
        name: "1",
        data: [5, 10, 20, 30],
        label: { show: false, color: "#0168c1" },
        type: "bar",
        barGap: 0,
        color: "#00629e",
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      },
      {
        name: "2",
        data: [4, 8, 12, 6],
        label: { show: false, color: "#639" },
        type: "bar",
        color: "#dc5726",
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      },
      {
        name: "3",
        data: [8, 3, 19, 15],
        label: { show: false, color: "#639" },
        type: "bar",
        color: "#3f51b5",
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      },
      {
        name: "3",
        data: [8, 3, 19, 15],
        label: { show: false, color: "#639" },
        type: "bar",
        color: "#2d2d2d",
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      },
    ],
  };

  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default ComparisonChart;

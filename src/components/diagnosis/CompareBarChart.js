import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { getDiagnosisState } from "../../utils/diagnosis/getDiagnosisState";

const CompareBarChart = ({ pre, now, className, ...props }) => {
  const chartRef = useRef(null);

  let preColor = getDiagnosisState(pre).color;
  let nowColor = getDiagnosisState(now).color;

  let isMobileScreen = window.innerWidth < 768;

  const data = {
    labels: ["이전 진단", "현재 진단"],
    datasets: [
      {
        data: [pre, now, 32],
        backgroundColor: [preColor, nowColor],
        borderWidth: 0,
        // maxBarThickness: 100,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: `${isMobileScreen ? "20rem" : "35rem"}`,
            weight: "bold",
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: `${isMobileScreen ? "20rem" : "35rem"}`,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 50,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    hover: { mode: null },
  };
  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "bar",
      data,
      options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [chartRef.current]);

  return <canvas className={className} {...props} ref={chartRef} />;
};

export default CompareBarChart;

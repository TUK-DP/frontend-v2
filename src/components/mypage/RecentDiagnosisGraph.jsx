import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { range } from "../../utils/array/range";

const RecentDiagnosisGraph = ({ number, className, ...props }) => {
  return (
    <div className={`relative aspect-square -my-20 ${className}`}>
      <BackGroundGraph className={"absolute"} />
      <DotGraph number={number} className={"absolute px-3"} />
      <div
        className={
          "w-full flex justify-center absolute font-bold text-6xl tablet:text-8xl bottom-1/3"
        }
      >
        {number}점
      </div>
    </div>
  );
};

const colors = ["#97D8DD", "#FFD52F", "#FC5C50"];

const options = {
  circumference: 180,
  rotation: -90,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  hover: { mode: null },
  responsive: true,
};

const BackGroundGraph = ({ className, ...props }) => {
  const chartRef = useRef(null);

  const data = {
    datasets: [
      {
        data: [8, 15, 30],
        backgroundColor: colors,
        borderColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
        borderWidth: 20,
        cutout: "90%",
      },
    ],
  };

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "doughnut",
      data,
      options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <canvas className={`absolute ${className}`} {...props} ref={chartRef} />
  );
};

const DotGraph = ({ number, className, ...props }) => {
  const chartRef = useRef(null);

  const width = 1;

  let offsetData = [number - width / 2, width, 30 - number - width / 2];

  const getIndex = () => {
    if (number < offsetData[0]) {
      return 0;
    }

    if (number < offsetData[0] + offsetData[1]) {
      return 1;
    }

    return 2;
  };

  const index = getIndex();

  const data = {
    datasets: [
      {
        data: offsetData,
        backgroundColor: range(3).map(
          (arrIndex) => `rgba(255, 255, 255, ${arrIndex === index ? 1 : 0})`
        ),
        borderColor: range(3).map(
          (arrIndex) => `rgba(0,0,0,${arrIndex === index ? 1 : 0})`
        ),
        borderWidth: window.innerWidth > 784 ? 8 : 4,
        borderRadius: window.innerWidth > 784 ? 20 : 10,
        cutout: "88%",
      },
    ],
  };

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "doughnut",
      data,
      options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <canvas {...props} className={`absolute ${className}`} ref={chartRef} />
  );
};

export default RecentDiagnosisGraph;

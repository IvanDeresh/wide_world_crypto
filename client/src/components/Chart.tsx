import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { ChartData } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const Chart = ({ id }: { id: string }) => {
  const [dataCharts, setDataCharts] = useState([]);
  const [period, setPeriod] = useState("1w");

  const fetchData = useCallback(async () => {
    try {
      const response = await axios({
        url: `https://openapiv1.coinstats.app/coins/${id}/charts?period=${period}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-API-KEY": "ZWoxZHLf8EuIUCJTf995TQVIfE0hFPzBRkzGsD4n1Aw=",
        },
      });
      setDataCharts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const maxChartDataValue = Math.max(...dataCharts.map((item) => item[1]));
  const minChartDataValue = Math.min(...dataCharts.map((item) => item[1]));
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart",
      },
    },
    scales: {
      y: {
        suggestedMin: minChartDataValue + minChartDataValue * 0.5,
        suggestedMax: maxChartDataValue + maxChartDataValue * 0.05,
      },
    },
  };

  const labels = dataCharts.map((item) =>
    new Date(item[0] * 1000).toLocaleDateString()
  );

  const datasets = [
    {
      label: id,
      data: dataCharts.map((item) => item),
      borderColor: "#5c78aa",
      backgroundColor: "#5c78aa",
      borderWidth: 1,
    },
  ];

  const data = {
    labels,
    datasets,
  };

  return (
    <div className="w-[1000px] border-2 p-[50px] rounded-[30px] flex flex-col gap-[20px] max-xl:w-[400px]">
      <Line options={options} data={data} />
      <div className="w-full flex gap-[10px] justify-around flex-wrap">
        <button
          className="w-[100px] border-2 rounded-2xl"
          onClick={() => setPeriod("1d")}
        >
          1 day
        </button>
        <button
          className="w-[100px] border-2 rounded-2xl"
          onClick={() => setPeriod("1w")}
        >
          1 week
        </button>
        <button
          className="w-[100px] border-2 rounded-2xl"
          onClick={() => setPeriod("1m")}
        >
          1 month
        </button>
        <button
          className="w-[100px] border-2 rounded-2xl"
          onClick={() => setPeriod("1y")}
        >
          1 year
        </button>
        <button
          className="w-[100px] border-2 rounded-2xl"
          onClick={() => setPeriod("all")}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default Chart;

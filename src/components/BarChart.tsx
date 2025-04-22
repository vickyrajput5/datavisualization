"use client";

import { Tip } from "@/lib/types";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface BarChartProps {
  data: Tip[];
}

export const BarChart = ({ data }: BarChartProps) => {
  const days = ["Thur", "Fri", "Sat", "Sun"];
  const averageTips = days.map((day) => {
    const daysTips = data
      .filter((item) => item.day === day)
      .map((item) => item.tip);
    const avg =
      daysTips.length > 0
        ? daysTips.reduce((a, b) => a + b, 0) / daysTips.length
        : 0;
    return avg;
  });
  const chartData = {
    labels: days,
    datasets: [
      {
        label: "Average Tip ($)",
        data: averageTips,
        backgroundColor: "rgba(16, 185, 129, 0.7)",
        borderColor: "rgba(16, 185, 129, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Average Tip ($)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Day of Week",
        },
      },
    },
  };
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <h2 className='text-lg font-semibold mb-4'>Average Tip by Day</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

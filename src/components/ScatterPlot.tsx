"use client";
import { Tip } from "@/lib/types";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
interface ScatterPlotProps {
  data: Tip[];
}
export const ScatterPlot = ({ data }: ScatterPlotProps) => {
  const chartData = {
    datasets: [
      {
        label: "Total Bills vs  Tip",
        data: data.map((item) => ({
          x: item.total_bill,
          y: item.tip,
        })),
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Total Bill ($)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Tip ($)",
        },
      },
    },
  };
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <h2 className='text-lg font-semibold mb-4'>Total Bill vs Tip</h2>
      <Scatter data={chartData} options={options} />
    </div>
  );
};

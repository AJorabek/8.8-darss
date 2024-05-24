import { Line as LineGraph } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
import curData from "./data";
const Line = () => {
  const options = {};
  const data = {
    labels: curData.map((e) => e.code),
    datasets: [
      {
        label: "Sales",
        data: curData.map((e) => e.value),
        fill: false,
        borderColor: "rgb(192, 75, 75)",
        tension: 0.1,
      },
    ],
  };
  return (
    <LineGraph
      width={1000}
      height={500}
      style={{
        display: "inline-block",
        maxWidth: "700px",
        margin: "auto",
      }}
      options={options}
      data={data}
    />
  );
};

export default Line;

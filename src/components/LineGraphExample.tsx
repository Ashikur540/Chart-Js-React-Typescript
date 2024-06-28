import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = () => {
  // Register necessary Chart.js components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  // Chart options with type annotations
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true,
        },
        border: {
          display: true,
        },
        ticks: {
          display: true,
          stepSize: 10,
          color: "black",
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: true,
        },
        ticks: {
          display: true,
          stepSize: 1,
          color: "black",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Weekly Temperature Variation",
        position: "top",
      },
    },
  };

  // Sample data
  interface DataPoint {
    day: string;
    value: number;
  }

  const originalData: DataPoint[] = [
    { day: "Monday", value: 22 },
    { day: "Tuesday", value: 34 },
    { day: "Wednesday", value: 19 },
    { day: "Thursday", value: 55 },
    { day: "Friday", value: 23 },
    { day: "Saturday", value: 87 },
    { day: "Sunday", value: 20 },
  ];

  const labels: string[] = originalData.map((data) => data.day);

  // Chart data with type annotations
  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: originalData.map((data) => data.value),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointBackgroundColor: "rgb(53, 162, 235)",
        pointBorderColor: "rgb(53, 162, 235)",
        fill: false,
      },
    ],
  };

  // Graph container style
  const graphStyle: React.CSSProperties = {
    minHeight: "20rem",
    maxWidth: "540px",
    width: "100%",
    border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
    margin: "1rem auto",
  };

  return (
    <div style={graphStyle}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineGraph;

import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  // Register necessary Chart.js components
  ChartJS.register(ArcElement, Title, Tooltip, Legend);

  // Chart options with type annotations
  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: true,
          stepSize: 10,
          color: "black",
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
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
  const data: ChartData<"pie"> = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: originalData.map((data) => data.value),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
          "rgb(22, 162, 235)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgb(22, 162, 235,0.2)",
        ],
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
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChart;

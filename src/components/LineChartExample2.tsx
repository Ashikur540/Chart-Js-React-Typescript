import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
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
  Legend
);
const graphStyle: React.CSSProperties = {
  minHeight: "20rem",
  maxWidth: "540px",
  width: "100%",
  border: "1px solid #C4C4C4",
  borderRadius: "0.375rem",
  padding: "0.5rem",
  margin: "1rem auto",
};
const weatherData = [
  { day: "2023-06-01", temperature: 22, humidity: 45 },
  { day: "2023-06-02", temperature: 23, humidity: 50 },
  { day: "2023-06-03", temperature: 21, humidity: 55 },
  { day: "2023-06-04", temperature: 24, humidity: 60 },
  { day: "2023-06-05", temperature: 25, humidity: 58 },
  { day: "2023-06-06", temperature: 26, humidity: 57 },
  { day: "2023-06-07", temperature: 24, humidity: 56 },
  { day: "2023-06-08", temperature: 23, humidity: 55 },
  { day: "2023-06-09", temperature: 22, humidity: 54 },
  { day: "2023-06-10", temperature: 21, humidity: 53 },
  { day: "2023-06-11", temperature: 20, humidity: 52 },
  { day: "2023-06-12", temperature: 19, humidity: 51 },
  { day: "2023-06-13", temperature: 21, humidity: 50 },
  { day: "2023-06-14", temperature: 22, humidity: 49 },
  { day: "2023-06-15", temperature: 24, humidity: 48 },
  { day: "2023-06-16", temperature: 25, humidity: 47 },
  { day: "2023-06-17", temperature: 26, humidity: 46 },
  { day: "2023-06-18", temperature: 27, humidity: 45 },
  { day: "2023-06-19", temperature: 28, humidity: 44 },
  { day: "2023-06-20", temperature: 29, humidity: 43 },
  { day: "2023-06-21", temperature: 30, humidity: 42 },
  { day: "2023-06-22", temperature: 29, humidity: 41 },
  { day: "2023-06-23", temperature: 28, humidity: 40 },
  { day: "2023-06-24", temperature: 27, humidity: 39 },
  { day: "2023-06-25", temperature: 26, humidity: 38 },
  { day: "2023-06-26", temperature: 25, humidity: 37 },
  { day: "2023-06-27", temperature: 24, humidity: 36 },
  { day: "2023-06-28", temperature: 23, humidity: 35 },
  { day: "2023-06-29", temperature: 22, humidity: 34 },
  { day: "2023-06-30", temperature: 21, humidity: 33 },
];
``;
const LineChartExample2 = () => {
  const days = weatherData.map((item) => item.day); // AXIS
  const temperatures = weatherData.map((item) => item.temperature); // LINE
  const humidities = weatherData.map((item) => item.humidity); // LINE

  const data: ChartData<"line"> = {
    labels: days,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
        yAxisID: "y1",
      },
      {
        label: "Humidity (%)",
        data: humidities,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        fill: false,
        yAxisID: "y2",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Temperature and Humidity Levels",
      },
    },
    scales: {
      y1: {
        type: "linear", // differet types of data can be displayed based on these types
        display: true,
        position: "left",
        // beginAtZero: true,
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Humidity (%)",
        },
      },
    },
  };
  return (
    <div style={graphStyle}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartExample2;

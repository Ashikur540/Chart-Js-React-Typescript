import LineChartExample2 from "./components/LineChartExample2";
import LineGraph from "./components/LineGraphExample";
import PieChart from "./components/PieChart";

// Main App component
const App = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <LineGraph />
      <PieChart />
      <LineChartExample2 />
    </div>
  );
};

export default App;

import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import CandlestickChart from "../../components/CandlestickChart";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center font-bold leading-tight text-white">
        Charts Example
      </h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-7 shadow rounded-lg h-96">
          <h2 className="text-lg text-center font-semibold text-gray-700">
            Line Chart
          </h2>
          <LineChart />
        </div>
        <div className="bg-white p-7 shadow rounded-lg h-96">
          <h2 className="text-lg text-center font-semibold text-gray-700">
            Bar Chart
          </h2>
          <BarChart />
        </div>
        <div className="bg-white p-4 shadow rounded-lg h-100">
          <h2 className="text-lg text-center font-semibold text-gray-700">
            Pie Chart
          </h2>
          <PieChart />
        </div>
        <div className="bg-white p-4 shadow rounded-lg h-100">
          <h2 className="text-lg text-center font-semibold text-gray-700">
            Candlestick Chart
          </h2>
          <CandlestickChart />
        </div>
      </div>
    </div>
  );
}

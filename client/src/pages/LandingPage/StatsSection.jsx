import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2000", emissions: 24.0 },
  { year: "2005", emissions: 29.3 },
  { year: "2010", emissions: 33.5 },
  { year: "2015", emissions: 35.9 },
  { year: "2018", emissions: 36.6 },
  { year: "2019", emissions: 36.7 },
  { year: "2020", emissions: 34.7 },
  { year: "2021", emissions: 36.3 },
  { year: "2022", emissions: 37.1 },
  { year: "2023", emissions: 37.0 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28DFF",
  "#FF6384",
  "#36A2EB",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

const StatsSection = () => {
  return (
    <section className="width flex flex-col items-center w-full py-8">
      <div className="flex flex-col items-center w-full h-[300px]">
        <h2 className="text-xl font-bold mb-4 title">Global CO₂ Emissions by Year</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              label={{
                value: "Billion Metric Tons",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              formatter={(value) => `${value} Billion Metric Tons`}
              labelFormatter={(label) => `Year: ${label}`}
            />
            <Legend />
            <Bar dataKey="emissions" fill="#8884d8" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1 w-full mt-8 p-4 bg-gray-100 rounded-md shadow-md">
        <h3 className="text-lg font-semibold">About the Graph</h3>
        <p className="text-sm text-gray-700 mt-2">
          This graph displays global carbon dioxide (CO₂) emissions from the year 2000 to 2023. The emissions are measured in billion metric tons and are used to track the increasing concentration of greenhouse gases in the atmosphere.
        </p>
        <p className="text-sm text-gray-700 mt-2">
          In a carbon credit trading platform, such data helps measure the impact of emission reduction efforts. Users can buy or sell carbon credits, which represent the reduction or removal of one metric ton of CO₂ from the atmosphere, in order to offset their carbon footprint.
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Understanding historical emission trends is essential for companies and individuals in the marketplace to make informed decisions regarding their carbon offset strategies.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;

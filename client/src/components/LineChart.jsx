import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Consumption",
    color: "hsl(80, 70%, 50%)",
    data: [
      {
        x: "1",
        y: 2,
      },
      {
        x: "2",
        y: 1,
      },
      {
        x: "3",
        y: 5,
      },
      {
        x: "4",
        y: 4,
      },
      {
        x: "5",
        y: 6,
      },
      {
        x: "6",
        y: 3,
      },
      {
        x: "7",
        y: 5,
      },
      {
        x: "8",
        y: 7,
      },
      {
        x: "9",
        y: 4,
      },
      {
        x: "10",
        y: 3,
      },
      {
        x: "11",
        y: 2,
      },
      {
        x: "12",
        y: 4,
      },
    ],
  },
];
export const MyResponsiveLine = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "0",
      max: "10",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="catmullRom"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "duration",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "water Consumptions",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    colors={{ scheme: "category10" }}
    enablePoints={false}
    enableGridX={false}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
  />
);

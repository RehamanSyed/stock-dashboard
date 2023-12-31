import React, { useContext, useEffect, useState } from "react";

import {
  convertDateToUnixTimeStamp,
  convertUnixTimeStamptoDate,
  createDate,
} from "../../helpers/date-helpers";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../card/Card";
import ChartFilter from "./ChartFilter";
import { chartConfig } from "../../constant/config";
import { fetchCandleData } from "../../api/stock-api";
import StockContext from "../../context/StockContext";
import { mockHistoricalData } from "../../constant/mock";

const Chart = ({ darkMode }) => {
  const [data, setData] = useState(mockHistoricalData);
  const { stockSymbol } = useContext(StockContext);
  const [filter, setFilter] = useState("1W");

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStamptoDate(data.t[index]),
      };
    });
  };

  // useEffect(() => {
  //   const getDateRange = () => {
  //     const { days, weeks, months, years } = chartConfig[filter];
  //     const endDate = new Date();
  //     const startDate = createDate(endDate, -days, -weeks, -months, -years);
  //     const startTimestampUnix = convertDateToUnixTimeStamp(startDate);
  //     const endTimestampUnix = convertDateToUnixTimeStamp(endDate);
  //     return { startTimestampUnix, endTimestampUnix };
  //   };

  //   const updateChartData = async () => {
  //     try {
  //       const { startTimestampUnix, endTimestampUnix } = getDateRange();
  //       const resolution = chartConfig[filter].resolution;

  //       const result = await fetchCandleData(
  //         stockSymbol,
  //         resolution,
  //         startTimestampUnix,
  //         endTimestampUnix
  //       );
  //       setData(formatData(result));
  //       console.log("Testing in for historical dat", result);
  //     } catch (error) {
  //       setData([]);
  //       console.log(error);
  //     }
  //   };
  //   updateChartData();
  // }, [stockSymbol, filter]);

  return (
    <Card>
      <ul className=" flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              />
            </li>
          );
        })}
      </ul>

      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset={"5%"}
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />

              <stop
                offset={"95%"}
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#321e84"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#050e45" } : null}
            itemStyle={darkMode ? { color: "white" } : null}
            labelStyle={darkMode ? { color: "white" } : null}
          />
          <XAxis dataKey="date" label={darkMode ? { color: "red" } : null} />
          <YAxis
            domain={["dataMin", "dataMax"]}
            label={darkMode ? { color: "red" } : null}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;

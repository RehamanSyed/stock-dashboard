import React from "react";
import Card from "../card/Card";

const Overview = ({
  symbol,
  price,
  change,
  changePercent,
  currency,
  darkMode,
}) => {
  return (
    <Card>
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="flex justify-between items-center w-full">
        <span className="text-2xl  xl:text-4xl 2xl:text-5xl flex items-center">
          {price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-500 m-2">
            {currency}
          </span>
        </span>
        <span>
          <span
            className={`text-lg  xl:text-xl 2xl:text-2xl ${
              change > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {change}
            <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-500 m-2">
              ({changePercent}%)
            </span>
          </span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;

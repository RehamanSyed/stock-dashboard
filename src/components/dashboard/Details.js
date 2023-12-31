import React, { useContext } from "react";
import Card from "../card/Card";
import ThemeContext from "../../context/ThemeContext";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);
  // console.log("details ==?", details);
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };
  const convertMillionToBillion = (num) => {
    // console.log(num);
    return (num / 1000).toFixed(2);
  };
  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailsList).map((item) => {
          return (
            <li
              key={item}
              className={`${
                darkMode ? "text-white" : "text-black"
              } flex-1 flex justify-between items-center `}
            >
              <span>{detailsList[item]}</span>
              <span>
                {item === "marketCapitalization"
                  ? `${convertMillionToBillion(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;

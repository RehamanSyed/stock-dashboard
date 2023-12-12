import React, { useContext, useEffect, useState } from "react";
import Header from "../shared/Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "../Chart/Chart";
import ThemeContext from "../../context/ThemeContext";
import StockContext from "../../context/StockContext";
import { fetchQoute, fetchStockDetails } from "../../api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [qoute, setQoute] = useState({});
  const [stockDetails, setStockDetails] = useState({});
  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (err) {
        setStockDetails({});
        console.log(err);
      }
    };
    const updateStockOverview = async () => {
      try {
        const result = await fetchQoute(stockSymbol);
        setQoute(result);
      } catch (err) {
        setQoute({});
        console.log(err);
      }
    };
    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);
  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-RethinkSans ${
        darkMode ? "bg-slate-800" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name} darkMode={darkMode} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart darkMode={darkMode} />
      </div>
      <Overview
        symbol={stockSymbol}
        price={qoute.pc}
        change={qoute.d}
        changePercent={qoute.dp}
        currency={stockDetails.currency}
        darkMode={darkMode}
      />

      <div className="xl:row-span-3 row-span-2">
        <Details details={stockDetails} />
      </div>
    </div>
  );
};

export default Dashboard;

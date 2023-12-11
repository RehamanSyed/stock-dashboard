import React, { useContext } from "react";
import StockContext from "../../context/StockContext";

const SearchResults = ({ results }) => {
  const { setStockSymbol } = useContext(StockContext);
  return (
    <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar">
      {results.map((item, idx) => {
        return (
          <li
            key={idx}
            className="cursor-pointer text-xs p-4 m-2 flex justify-between items-center rounded-md hover:bg-gray-100"
            onClick={() => {
              setStockSymbol(item.symbol);
            }}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;

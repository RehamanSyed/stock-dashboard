import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-indigo-400 text-white"
          : "bg-white border-indigo-400 text-indigo-600"
      }`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;

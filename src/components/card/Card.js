import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-neutral-200"
      } w-full h-full rounded-md relative p-8 border-2`}
    >
      {children}
    </div>
  );
};

export default Card;

import React, { useContext } from "react";
import { BiMoon } from "react-icons/bi";
import ThemeContext from "../../context/ThemeContext";
const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      className={`absolute p-2 border-neutral-200 border-1 rounded-lg right-10  xl:right-32 shadow-lg ${
        darkMode ? "shadow-gray-900" : null
      }`}
      onClick={toggleDarkMode}
    >
      <BiMoon size={24} color={darkMode ? "yellow" : "red"} />
    </button>
  );
};

export default ThemeIcon;

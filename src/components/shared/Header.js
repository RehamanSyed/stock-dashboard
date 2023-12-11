import React from "react";
import Search from "../search/Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name, darkMode }) => {
  return (
    <>
      <div className="xl:px-32">
        <h1 className={`${darkMode ? "text-white" : "text-black"} text-5xl`}>
          {name}
        </h1>
        <Search />
      </div>
      <ThemeIcon />
    </>
  );
};

export default Header;

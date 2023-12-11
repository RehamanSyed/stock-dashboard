import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import SearchResults from "./SearchResults";
import { searchSymbols } from "../../api/stock-api";
const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };
  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResult = await searchSymbols(input);
        const result = searchResult.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };
  return (
    <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-300">
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        className="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search Stock.."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            updateBestMatches();
          }
        }}
      />

      {input && (
        <button onClick={clear} className="text-gray">
          <IoCloseCircle size={24} color="gray" />
        </button>
      )}

      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 text-white"
      >
        <FiSearch />
      </button>

      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
};

export default Search;

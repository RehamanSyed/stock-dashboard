import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("SHANF");
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />;
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

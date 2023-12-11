const basePath = "https://finnhub.io/api/v1";

export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = "Something went Wrong";
    throw new Error(message);
  }
  return await response.json();
};
export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = "Something went Wrong in fetching Stock Data";
    throw new Error(message);
  }
  return await response.json();
};
export const fetchQoute = async (stockSymbol) => {
  const url = `${basePath}/qoute?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = "Something went Wrong in qoute Stock Data";
    throw new Error(message);
  }
  return await response.json();
};

export const fetchCandleData = async (stockSymbol, from, to, resolution) => {
  const url = `${basePath}//stock/candle?symbol=${stockSymbol}L&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = "Something went Wrong in fetching Candle Data";
    throw new Error(message);
  }
  return await response.json();
};

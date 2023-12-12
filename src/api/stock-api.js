const basePath = "https://finnhub.io/api/v1";

export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = "Something went Wrong @ searchSymbols";
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
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = "Something went Wrong in qoute Stock Data";
    throw new Error(message);
  }
  const result = await response.json();
  console.log("Qoute===>", result);
  return result;
};

export const fetchCandleData = async (stockSymbol, resolution, from, to) => {
  console.log(
    "stockSymbol, resolution, from, to",
    stockSymbol,
    resolution,
    from,
    to
  );
  const url = `${basePath}/stock/candle?symbol=${stockSymbol}L&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;
  console.log("Url of fetch data", url);
  // const url = `${basePath}/stock/candle?symbol=AAPL&resolution=1&from=1693493346&to=1693752546&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  console.log("Candle data --->", response);
  if (!response.ok) {
    const message = "Something went Wrong in fetching Candle Data";
    throw new Error(message);
  }
  return await response.json();
};

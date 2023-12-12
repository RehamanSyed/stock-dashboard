export const convertDateToUnixTimeStamp = (date) => {
  return Math.floor(date.getTime() / 1000);
};

export const convertUnixTimeStamptoDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleDateString();
};

export const createDate = (date, days, week, months, year) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * week);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + year);
  return newDate;
};

const DateFormate = (date) => {
  const d = new Date(date);
  let day = d.getDate();
  let month = d.toLocaleDateString();
  let year = d.getFullYear();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `Date: ${month}, Time: ${hours}:${minutes} ${ampm}`;
};
export default DateFormate;

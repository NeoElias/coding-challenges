function timeConversion(s) {
  const hourValue = parseInt(s.slice(0, 2));
  const amTime = s.slice(-2) === "AM";
  const pmTime = s.slice(-2) === "PM";
  if (amTime && hourValue === 12) {
    return "00" + s.slice(-8, -2);
  } else if (pmTime && hourValue < 12) {
    let convertedHourValue = hourValue + 12;
    return convertedHourValue.toString() + s.slice(-8, -2);
  } else {
    return s.slice(0, -2);
  }
}
console.log(timeConversion("07:05:45PM"));

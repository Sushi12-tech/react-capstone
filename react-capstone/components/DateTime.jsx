import React, { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const options = { hour: "2-digit", minute: "2-digit" };
  const timeWithoutSeconds = date.toLocaleTimeString([], options);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if necessary
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if necessary

  const formattedDate = day + "-" + month + "-" + year;
  return (
    <div style={{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }}>
      <p style={{
        fontFamily:"Roboto",
        fontWeight: "600",
        fontSize: "30px",
        color: "#FFFFFF"
      }}> {formattedDate}</p>
      <p style={{
        fontFamily:"Roboto",
        fontWeight: "600",
        fontSize: "30px",
        color: "#FFFFFF"
      }}> {timeWithoutSeconds}</p>
    </div>
  );
};

export default DateTime;

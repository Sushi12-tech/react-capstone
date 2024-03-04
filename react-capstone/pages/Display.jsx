import React from "react";
import UserInfo from "../components/UserInfo";
import DateAndWeather from "../components/DateAndWeather";
import Notes from "../components/Notes";
import News from "../components/News";

const Display = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <UserInfo />
        <DateAndWeather />
      </div>
      <div>
        <Notes />
      </div>
      <News />
    </div>
  );
};

export default Display;

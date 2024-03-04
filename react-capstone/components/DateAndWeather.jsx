import DateTime from "./DateTime";
import { useEffect, useState } from "react";
export default function DateAndWeather() {
  const [weather, setWeather] = useState(null);

  //   useEffect(() => {
  //     fetch(
  //       "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=EMlDoekPXbi1A7UkkdxiIXw9k7li1srr"
  //     )
  //       .then((data) => data.json())
  //       .then((data) => setWeather(data))
  //       .catch((error) => console.log(error));
  //   }, []);
  console.log(weather);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25vw",
        // backgroundColor: "#101744",
        // borderRadius: "19px"
      }}
    >
      <div
        style={{
          backgroundColor: "#FF4ADE",
          borderTopLeftRadius: "19px",
          borderTopRightRadius: "19px",
          flex: "0.2",
        }}
      >
        <DateTime />
      </div>
      <div
        style={{
          backgroundColor: "#101744",
          color: "#FFFFFF",
          borderBottomLeftRadius: "19px",
          borderBottomRightRadius: "19px",
          flex: "0.8",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="../assets/weather_vector.png" alt="weather_vector" />
          <div
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "15px",
            }}
          >
            {weather
              ? weather.timelines.daily[0].values.temperatureAvg > 20
                ? "Heavy Rain"
                : "Winter"
              : "Loading..."}
          </div>
        </div>
        <div>
          <img src="../assets/Line.png" alt="line" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "44px",
            }}
          >
            {weather
              ? weather.timelines.daily[0].values.temperatureAvg
              : "Loading..."}
            °C
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img src="../assets/pressure.png" alt="pressure_vector" />
            <div style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "13px",
            }}>
              {weather
                ? weather.timelines.daily[0].values.pressureSurfaceLevelAvg
                : "Loading"}{" "}
              mbar Pressure
            </div>
          </div>
        </div>
        {weather ? weather.timelines.daily[0].values.windGustAvg : "Loading..."}{" "}
        km/h
        <p>Wind</p>
        {weather
          ? weather.timelines.daily[0].values.humidityAvg
          : "Loading..."}{" "}
        %<p>Humidity</p>
      </div>
    </div>
  );
}

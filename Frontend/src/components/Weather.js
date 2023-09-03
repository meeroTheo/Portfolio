import { useState, useEffect } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      //Geocoding API call to get latitude and longitude of the city
      const latLong = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=toronto&format=json`
      );
      if (latLong.data && latLong.data.length > 0) {
        const { lat, lon } = latLong.data[0];
        //openweathermap
        const weather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
        );
        setWeather(weather.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="weatherContainer">
      <ShowWeather weather={weather} />
    </div>
  );
};
export default Weather;

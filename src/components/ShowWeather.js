const ShowWeather = ({ weather }) => {
  if (weather) {
    const imgLink = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    return (
      <div className="weatherContainer">
        {/* style={{ width: "50px", height: "auto" }}*/}
        <p>
          Toronto, ON {Math.round(weather.main.temp)} °C
          <img
            src={imgLink}
            alt="icon"
            style={{ width: "50px", height: "auto" }}
          />
        </p>
      </div>
    );
  }
};

export default ShowWeather;

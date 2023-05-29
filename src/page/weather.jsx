import { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import getWeatherData from "../api/getWeatherData";
import "./weather.css";
const cities = ["Delhi", "Mumbai", "Bangalore", "Kolkata"];

const cityImages = {
  Delhi:
    "https://images.unsplash.com/photo-1595928607828-6fdaee9c0942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  Mumbai:
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/c8/3a.jpg",
  Kolkata:
    "https://www.india-briefing.com/news/wp-content/uploads/2013/11/Kolkata-City-Profile.jpg",
  Bangalore:
    "https://www.skymetweather.com/content/wp-content/uploads/2017/05/Bengaluru-31.jpg",
};
const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const handleClick = async (city) => {
    setCity(city);
    const data = await getWeatherData(city);
    setWeather(data);
  };
  return (
    <Container className="main">
      <Row xs={1} sm={2} md={3} lg={3}>
        {cities.map((cityName) => (
          <button key={cityName} onClick={() => handleClick(cityName)}>
            {cityName}
          </button>
        ))}
      </Row>
      {weather && (
        <Card className="card">
          <Card.Body>
            <Card.Img
              variant="top"
              src={cityImages[city]}
              alt={`${city} city`}
              className="image"
            />

            <Card.Title>{weather.city}</Card.Title>
            <Card.Text>{`${weather.temperature}°C`}</Card.Text>
            <Card.Text>{weather.weather}</Card.Text>
            <Card.Text>{weather.date}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default WeatherApp;

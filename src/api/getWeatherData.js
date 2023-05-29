import axios from "axios";

const API_KEY = "fcc8de7015bbb202209bbf0261babf4c";

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      weather: response.data.weather[0].description,
      date: new Date().toLocaleDateString(),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getWeatherData;

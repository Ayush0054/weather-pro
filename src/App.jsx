import "./App.css";
import Header from "./components/header";
import WeatherApp from "./page/weather";

function App() {
  return (
    <div className="app">
      <video
        id="background-video"
        controls
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      <Header />
      <WeatherApp />
    </div>
  );
}

export default App;

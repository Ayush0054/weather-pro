import "./App.css";
import Header from "./components/header";
import WeatherApp from "./page/weather";

function App() {
  return (
    <div className="app">
      <Header />
      <WeatherApp />
    </div>
  );
}

export default App;

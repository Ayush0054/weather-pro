import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import WeatherApp from "./page/weather";

function App() {
  const [hide, setHide] = useState(true);
  const [text, setText] = useState("hide");
  const show = () => {
    setHide(true);
    setText("show");
    if (hide === true) {
      setHide(false);
    }
    if (text === "show") {
      setText("hide");
    }
  };
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
      <button onClick={show}> {text}</button>
      {hide && <WeatherApp />}
    </div>
  );
}

export default App;

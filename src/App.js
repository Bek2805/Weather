import Header from "./components/Header.js";
import './assets/style/Style.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import Forecast from "./components/Forecast.jsx";
import { useState } from "react";


const App = () => {

  const [city, setCity] = useState("")

  const handleClick = (input) => {
    setCity(input)
  }

  return (
    <Router>
      <Header  handleClick={handleClick}/>
      <Routes>
        <Route path="/" element={<MainPage city={city}/>}/>
        <Route path="/forecast" element={<Forecast/>}/>
      </Routes>
    </Router>
  );
}

export default App;

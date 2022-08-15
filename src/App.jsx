import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import data from "./components/data";
import "./App.css";

function App() {
  const sliderComponents = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={`./src/assets/${item.coverImg}`}
        rating={item.stats.rating}
        reviews={item.stats.reviewCount}
        location={item.location}
        intro={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Main />
      <section className="cards-section"> {sliderComponents}</section>
    </div>
  );
}

export default App;

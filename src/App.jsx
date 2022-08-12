import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="cards-deck">
        <Card />
        <Card
          reviews="30"
          intro="Learn wedding photography"
          price="125"
          img="./src/assets/Wedding.png"
        />
        <Card
          reviews="2"
          rating="4.8"
          intro="Group mountain biking"
          price="50"
          img="./src/assets/Cycyling.png"
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./Main.css";

function Main() {
  return (
    <section>
      <div className="hero-image-container">
        <img src="./src/assets/Photo grid.png" className="hero-img"></img>
      </div>
      <div className="online-experiences">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-desc">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Main;

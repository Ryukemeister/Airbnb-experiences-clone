import React from "react";
import "./Card.css";

/*
function Card() {
  return (
    <div className="card-container">
      <img className="katie-picture" src="./src/assets/Katie.png"></img>
      <div className="card-stats">
        <img className="star-rating" src="./src/assets/Star 1.png"></img>
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
*/

function Card({ img, rating, reviews, country, intro, price }) {
  return (
    <div className="card-container">
      <img className="katie-picture" src={img}></img>
      <div className="card-stats">
        <img className="star-rating" src="./src/assets/Star 1.png"></img>
        <span>{rating}</span>
        <span className="gray">({reviews}) • </span>
        <span className="gray">{country}</span>
      </div>
      <p>{intro}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

Card.defaultProps = {
  img: "./src/assets/Katie.png",
  rating: "5.0",
  reviews: "6",
  country: "USA",
  intro: "Life Lessons with Katie Zaferes",
  price: "136",
};

export default Card;

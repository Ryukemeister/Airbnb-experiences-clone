import React from "react";
import "./Card.css";

// {openSpots === 0 ? <div className="card--badge">SOLD OUT</div> : ""}
// {openSpots === 0 && <div className="card--badge">SOLD OUT</div>}

function Card({ img, rating, reviews, location, intro, price, openSpots }) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="katie-picture" src={img}></img>
      <div className="card-stats">
        <img className="star-rating" src="./src/assets/Star 1.png"></img>
        <span>{rating}</span>
        <span className="gray">({reviews}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{intro}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;

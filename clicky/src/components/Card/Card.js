import React from "react";
import "./style.css";

// Render images
function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
          onClick={() => props.shuffleCard(props.id)}
        />
      </div>
    </div>
  );
}
export default Card;

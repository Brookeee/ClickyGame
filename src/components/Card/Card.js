import React from "react";
import "./style.css";

// Render images

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={process.env.PUBLIC_URL + props.image}
          onClick={() => props.clickHandler(props.id)}
        />
      </div>
    </div>
  );
}
export default Card;

import React from "react";
// import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="head">{props.children}</h1>
      <h2 className="score">
        {" "}
        Current Score: {props.scores} | High Score: {props.highScore}
      </h2>
      <h3>
        Select a musical artists to begin. Click one image only ONCE. Good luck!
      </h3>
    </div>
  );
}
export default Header;

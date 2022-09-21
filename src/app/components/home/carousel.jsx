import React from "react";
import "./HomeStyles.css"
import cycling from "./img/Cycling.png"
import running from "./img/Running.png"
import yoga from "./img/Yoga.png"
import esports from "./img/E-Sports.png"
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";








export default function Carousell() {
  return (
    <div>
      <div className="heading-banner">
        <p className="heading1">Exercise</p>
        <p className="heading2">Everyday</p>
      </div>
      <div className="icon-grid">
        <Link to='/running' >
          <div className="grid-object"><img src={running} />Running</div>
        </Link>
        <Link to="/running">
          <div className="grid-object"><img src={yoga} /><p>Yoga</p></div>
        </Link>
        <Link to="">
          <div className="grid-object"><img src={cycling} /><p>Cycling</p></div>
        </Link>
        <Link to="">
          <div className="grid-object"><img src={esports} /><p>E-Sports</p></div>
        </Link>
      </div>
    </div>
  );
}



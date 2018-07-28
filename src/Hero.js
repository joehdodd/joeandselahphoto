import React from "react";
import './Hero.css';

const Hero = props => (
  <div className="hero-wrapper">
    <div className="hero-container">
      <img className="hero-image" src={props.img} alt={props.alt} />
      <span className="hero-text">{props.mainText}</span>
    </div>
  </div>
);

export default Hero;

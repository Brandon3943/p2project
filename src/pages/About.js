import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
        <p>Welcome to the world of BlackJack! In this game you will play as two players 
          (automated dealer feature coming soon). Player/ Dealer will start off with two cards,
          and the first to get closest to, or get 21 wins! But be careful! go over 21 and.... BUST.</p>
        <Link to="/">
          <button className="nav-link-buttons" id="about-button">Back to Game</button>
        </Link>
    </div>
  )
}

export default About
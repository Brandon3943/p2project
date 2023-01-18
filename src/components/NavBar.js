import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ handlePlayerHit, handleDealerHit, user }) {
  return (
    <div className="nav-bar">
      {user.name ? (
        <>
        <div className="welcome-message">
          <p>{`Welcome in, ${user.name}`}</p>
          <img src={user.image} alt="user" className="App-logo" />
        </div> 
        <div className="game-buttons"> 
          <button className="nav-button" onClick={handlePlayerHit}>
            Player Hit
          </button>
          <button className="nav-button">Player Stay</button>
          <br></br>
          <button className="nav-button" onClick={handleDealerHit}>
            Dealer Hit
          </button>
          <button className="nav-button">Dealer Stay</button>
          <button className="nav-button">Save Hand & Reset</button>
        </div>
        <div className="nav-links">
          <Link to="/about">
          <button className="nav-link-buttons">About</button>
          </Link>
         <hr></hr>
         <Link to="/">
          <button className="nav-link-buttons">Past Wins</button>
          </Link>
        <hr></hr>
          <Link to="/login">
           <button className="nav-link-buttons">Switch User</button>
          </Link>
        </div>
        </>
          ) : <Link to="/login">
           <button className="nav-login-button">Login</button>
          </Link>}
        </div>
  );
}

export default NavBar;

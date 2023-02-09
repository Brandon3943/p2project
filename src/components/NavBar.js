import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ handlePlayerHit, handleDealerHit, user }) {
 const [disabledDealer, setDisabledDealer] = useState(false)
 const [disabledPlayer, setDisabledPlayer] = useState(false)

  function toggleDisabled(user) {
    user(prev => !prev)
  }


  return (
    <div className="nav-bar">
      {user.name ? (
        <>
        <div className="welcome-message">
          <p>{`Welcome in, ${user.name}`}</p>
          <img src={user.image} alt="user" className="App-logo" />
        </div> 
        <div className="game-buttons"> 
        <button className="nav-button" onClick={handleDealerHit} disabled={disabledDealer}>
            Player Hit
          </button>
          <button className="nav-button" onClick={() => toggleDisabled(setDisabledDealer)} >Player Stay</button>
          <br></br>
          <button className="nav-button" onClick={handlePlayerHit} disabled={disabledPlayer}>
            Dealer Hit
          </button>
          <button className="nav-button" onClick={() => toggleDisabled(setDisabledPlayer)}>Dealer Stay</button>          
        </div>
        <div className="nav-links">
          <Link to="/about">
          <button className="nav-link-buttons">About</button>
          </Link>
         <hr></hr>
         <Link to="/pastwins">
          <button className="nav-link-buttons">Past Wins</button>
          </Link>
        <hr></hr>
          <Link to="/login/new">
           <button className="nav-link-buttons">Switch User</button>
          </Link>
        </div>
        </>
          ) : <Link to="/login/new">
           <button className="nav-login-button">Login</button>
          </Link>}
        </div>
  );
}

export default NavBar;

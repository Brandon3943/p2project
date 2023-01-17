import React from 'react'


function NavBar( { handlePlayerHit, handleDealerHit }) {
  return (
    <div className="nav-bar" style={{height: 140, border: "2px solid black"}}>
        <p className="welcome-message">{`Welcome in, ${"set IMAGE"} ${"set player"}`}</p>
        <button className="player-button" onClick={handlePlayerHit}>Player Hit</button>
        <button className="player-button">Player Stay</button>
        <br></br>
        <button className="dealer-button" onClick={handleDealerHit}>Dealer Hit</button>
        <button className="dealer-button">Dealer Stay</button>
        <button className="post-button">Save Hand & Reset</button>
    </div>
  )
}

export default NavBar
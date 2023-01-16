import React from 'react'
import blkJackImg from '../assets/blackjackcards.png'

function NavBar( { handlePlayerHit, handleDealerHit }) {
  return (
    <div className="nav-bar" style={{height: 100, border: "2px solid black"}}>
        <img src={blkJackImg} style={{width: 70, height: 70}} className="App-logo" alt='blackJack' />
        <button className="player-button" onClick={handlePlayerHit}>Player Hit</button>
        <button className="player-button">Player Stay</button>
        <br></br>
        <button className="dealer-button" onClick={handleDealerHit}>Dealer Hit</button>
        <button className="dealer-button">Dealer Stay</button>
    </div>
  )
}

export default NavBar
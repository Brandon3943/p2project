import React from 'react'
import blkJackImg from '../assets/blackjackcards.png'

function NavBar() {
  return (
    <div style={{height: 100, border: "2px solid black"}}>
        <img src={blkJackImg} style={{width: 70, height: 70}} className="App-logo" alt='blackJack' />
        <button></button>
        <button></button>
        <button></button>
        <button></button>
    </div>
  )
}

export default NavBar
import React from 'react'
import Cards from '../components/cards/Cards'
import { Link } from 'react-router-dom'

function PastWins({ winningHand }) {
  

   let winning = winningHand.map(hand => {
    return <Cards images={hand.image} key={hand.id} /> 
   })
   

   console.log(winning)

  return (
    <div className="post-table">
      {winning}
      <Link to="/">
      <button className="nav-link-buttons" id="post-back-to-game" >Back to Game</button>
      </Link>
    </div>
  )
}

export default PastWins
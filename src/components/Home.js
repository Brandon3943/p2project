import React, { useState, useEffect } from 'react'

function Home() {
  const [getHands, setGetHands] = useState([])
  const [cardValues, setCardValues] = useState([])
 
  

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(resp => resp.json())
      .then(data => {
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=4`)
          .then(resp => resp.json())
          .then(data => {
            setCardValues(data.cards.flatMap(card => {
              return Array.from((card.code[0]))
            }))
            setGetHands(data.cards.map(card => {
              return <img src={card.image} key={card.code} code={card.code} alt="cards" width="100" className="hands"/>
          }))})
      })
    }, [])  

  let player = getHands.slice(0,2)
  let dealer = getHands.slice(2)

 let intValues = cardValues.map(value => {
    if(value === "A") {
        return 11
    } else if(value === "2") {
        return 2
    } else if (value === "3") {
        return 3
    } else if (value === "4") {
        return 4
    } else if (value === "5") {
        return 5
    } else if (value === "6") {
        return 6
    } else if (value === "7") {
        return 7
    } else if (value === "8") {
        return 8
    } else if (value === "9") {
        return 9
    } else if (value === "0") {
        return 10
    } else if (value === "J") {
        return 10
    } else if (value === "Q") {
      return 10
    } else if (value === "K") {
      return 10
    }});

    console.log(intValues)

  return (
    <div className="card-table">
      {dealer}
      <br></br>
      Dealer
      <hr></hr>
      Player
      <br></br>  
      {player}         
    </div>
  )
}

export default Home
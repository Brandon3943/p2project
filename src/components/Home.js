import React, { useState, useEffect } from 'react'

function Home({ handleDeckId, playerHit, playerHitCard, dealerHit, dealerHitCard }) {
  const [getHands, setGetHands] = useState([])
  const [cardValues, setCardValues] = useState([])  

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(resp => resp.json())
      .then(data => {
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=4`)
          .then(resp => resp.json())
          .then(data => {
            handleDeckId(data.deck_id)
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
    } else {
      return "Error";
    }});

   
    let hitPlayerIntValues = playerHit.map(value => {
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
      } else {
        return "Error";
      }});

      let hitDealerIntValues = dealerHit.map(value => {
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
        } else {
          return "Error";
        }});

      let playerHitTotal;

      if(hitPlayerIntValues.length === 5) {
        playerHitTotal = hitPlayerIntValues[0] + hitPlayerIntValues[1] + hitPlayerIntValues[2] + hitPlayerIntValues[3] + hitPlayerIntValues[4];
      } else if (hitPlayerIntValues.length === 4) {
        playerHitTotal = hitPlayerIntValues[0] + hitPlayerIntValues[1] + hitPlayerIntValues[2] + hitPlayerIntValues[3]
      } else if (hitPlayerIntValues.length === 3) {
        playerHitTotal = hitPlayerIntValues[0] + hitPlayerIntValues[1] + hitPlayerIntValues[2];
      } else if (hitPlayerIntValues.length === 2) {
        playerHitTotal = hitPlayerIntValues[0] + hitPlayerIntValues[1];
      } else if (hitPlayerIntValues.length === 1) {
        playerHitTotal = hitPlayerIntValues[0]
      } else {
        playerHitTotal = 0;
      }

      let dealerHitTotal;

      if(hitDealerIntValues.length === 5) {
        dealerHitTotal = hitDealerIntValues[0] + hitDealerIntValues[1] + hitDealerIntValues[2] + hitDealerIntValues[3] + hitDealerIntValues[4];
      } else if (hitDealerIntValues.length === 4) {
        dealerHitTotal = hitDealerIntValues[0] + hitDealerIntValues[1] + hitDealerIntValues[2] + hitDealerIntValues[3]
      } else if (hitDealerIntValues.length === 3) {
        dealerHitTotal = hitDealerIntValues[0] + hitDealerIntValues[1] + hitDealerIntValues[2];
      } else if (hitDealerIntValues.length === 2) {
        dealerHitTotal = hitDealerIntValues[0] + hitDealerIntValues[1];
      } else if (hitDealerIntValues.length === 1) {
        dealerHitTotal = hitDealerIntValues[0]
      } else {
        dealerHitTotal = 0;
      }


    let playerValue = intValues.slice(0,2)
    let dealerValue = intValues.splice(2)

    let playerTotal = playerValue[0] + playerValue[1];
    let dealerTotal = dealerValue[0] + dealerValue[1];

    let dealerHand = dealerTotal + dealerHitTotal;
    let playerHand = playerTotal + playerHitTotal;

    if(dealerHand >= 22) {
      dealerHand = "BUST" 
    }

    if(playerHand >= 22) {
      playerHand = "BUST" 
    }

    console.log(dealerHand)

  return (
    <div className="card-table">
      {dealerHitCard}
      <br></br>
      {dealer}
      <br></br>
      {`Dealer ${dealerHand}`}
      <hr></hr>
      {`Player ${playerHand}`}
      <br></br>  
      {player}
      <br></br>
      {playerHitCard}      
    </div>
  )
}

export default Home
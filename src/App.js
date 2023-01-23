import { Switch, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import About from './pages/About';
import Fallback from './pages/Fallback';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import PastWins from './pages/PastWins';

function App() {
  const [deckId, setDeckId] = useState("")
  const [playerHit, setPlayerHit] = useState([])
  const [playerHitCard, setPlayerHitCard] = useState([])
  const [dealerHit, setDealerHit] = useState([])
  const [dealerHitCard, setDealerHitCard] = useState([])
  const [winningHand, setWinningHand] = useState([])
  const [user, setUser] = useState({
    name: "",
    image: ""
  })


  useEffect(() => {
    fetch("http://localhost:3002/saved")
      .then(resp => resp.json())
      .then(data => setWinningHand(data))   
  }, [])

  function updateWinningHand(value) {
    setWinningHand(prev => [...prev, value])
  }



  function handleDeckId(id) {
    setDeckId(id)
  }

  function handlePlayerHit() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
       .then(resp => resp.json())
       .then(data => {
        setPlayerHit(prev => [...prev, data.cards[0].code[0]])
        setPlayerHitCard(prev => [...prev, <img src={data.cards[0].image} alt="card" width="100px"/>])
      })
  }   

  function handleDealerHit() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
       .then(resp => resp.json())
       .then(data => {
        setDealerHit(prev => [...prev, data.cards[0].code[0]])
        setDealerHitCard(prev => [...prev, <img src={data.cards[0].image} alt="card" width="100px"/>])
      })
  }

  function handleUpdateUser(value) {
    setUser(value)
  }
  

  return (
    <div>
      <Switch>

        <Route path='/login/new'>
            <Login handleUpdateUser={handleUpdateUser} />
        </Route>

        <Route path='/about'>
            <About />
        </Route> 

        <Route path='/pastwins'>
            <PastWins winningHand={winningHand}/>
        </Route>

        <Route exact path='/'>
            <NavBar user={user} handlePlayerHit={handlePlayerHit} handleDealerHit={handleDealerHit}/>
            <Home handleDeckId={handleDeckId} playerHit={playerHit} playerHitCard={playerHitCard} dealerHit={dealerHit} dealerHitCard={dealerHitCard} updateWinningHand={updateWinningHand} setDealerHit={setDealerHit} setPlayerHit={setPlayerHit} setPlayerHitCard={setPlayerHitCard} setDealerHitCard={setDealerHitCard}/>
        </Route> 

        <Route path='/*'>
            <Fallback />
        </Route>  

      </Switch>  
    </div>
  );
}

export default App;

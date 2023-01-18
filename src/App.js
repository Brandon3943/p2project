import { Switch, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import About from './pages/About';
import Fallback from './pages/Fallback';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';

function App() {
  const [deckId, setDeckId] = useState("")
  const [playerHit, setPlayerHit] = useState([])
  const [playerHitCard, setPlayerHitCard] = useState("")
  const [dealerHit, setDealerHit] = useState([])
  const [dealerHitCard, setDealerHitCard] = useState("")
  const [user, setUser] = useState({
    name: null,
    image: null
  })

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

        <Route path='/login'>
            <Login handleUpdateUser={handleUpdateUser} />
        </Route>

        <Route path='/about'>
            <About />
        </Route> 

        <Route exact path='/'>
            <NavBar user={user} handlePlayerHit={handlePlayerHit} handleDealerHit={handleDealerHit}/>
            <Home handleDeckId={handleDeckId} playerHit={playerHit} playerHitCard={playerHitCard} dealerHit={dealerHit} dealerHitCard={dealerHitCard}/>
        </Route> 

        <Route path='/*'>
            <Fallback />
        </Route>  

      </Switch>  
    </div>
  );
}

export default App;

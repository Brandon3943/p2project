
import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Fallback from './components/Fallback';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
      <NavBar />

      <Switch>

        <Route path='/login'>
            <Login />
        </Route>

        <Route path='/about'>
            <About />
        </Route> 

        <Route exact path='/'>
            <Home />
        </Route> 

        <Route path='/*'>
            <Fallback />
        </Route>  

      </Switch>  
    </div>
  );
}

export default App;

import React from 'react'
import { Link } from 'react-router-dom';

function Fallback() {
  return (
    <div>
        <h1>404 ERROR: URL does not exsit!</h1>
        <Link to='/'>Click here to return home</Link>
    </div>
  )
}

export default Fallback
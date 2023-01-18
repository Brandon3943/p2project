import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function Login({ handleUpdateUser }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const history = useHistory()

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleImage(e) {
    setImage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let formData = {
      name,
      image
    }
   fetch("http://localhost:3001/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
   })
   .then(resp => resp.json())
   .then(data => {
    handleUpdateUser(data)
    history.push("/")
   })
  }
  

  return (
    <div className="form">
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor="userName" className="label">Name</label>
          <br></br>
          <input type="text" placeholder="name here" id="userName" onChange={handleNameChange} value={name}/>
          <br></br>
          <label htmlFor="userPic" className="label">Avatar</label>
          <br></br>
          <input type="text" placeholder="url here" id="userPic" onChange={handleImage} value={image} />
          <br></br>
          <button type="submit" className="nav-link-buttons" id="login">Click to login</button>
        </form>
    </div>
  )
}

export default Login
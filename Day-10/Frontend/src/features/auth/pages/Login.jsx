import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../style/form.scss'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/login",{
      username,
      password
      },{
        withCredentials: true
      })
      .then(res =>{
        console.log(res.data)
    })
  }



  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name='username'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>

        <p>Don't have an account? <a className="toggleAuthForm" href="/register">Register</a></p>
      </div>
    </main>
  )
}

export default Login
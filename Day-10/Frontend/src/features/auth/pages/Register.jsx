import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../style/form.scss'

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleFormSubmit(e){
    e.preventDefault()

    
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
          <input
          onInput={(e)=>setUsername(e.target.value)}
          type="text" 
          name='username' 
          placeholder='Enter username' />
          <input
          onInput={(e)=>setEmail(e.target.value)}
          type="email" 
          name='email' 
          placeholder='Enter email' />
          <input
          onInput={(e)=>setPassword(e.target.value)}
          type="password" 
          name='password' 
          placeholder='Enter password' />
          <button type='submit'>Register</button>
        </form>

        <p>Already have an account? <a className="toggleAuthForm" href="/login">Login</a></p>
      </div>
    </main>
  )
}

export default Register
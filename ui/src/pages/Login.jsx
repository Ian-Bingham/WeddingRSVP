import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

import whitelist from '../data/whitelist'

const Login = () => {
  const [input, setInput] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (evt) => {
    evt.preventDefault()

    if(whitelist.includes(input)) {
      setError('')
      setRedirect(true)
    } else {
      setError('Unauthorized')
      setRedirect(false)
    }
  }

  return (
    <>
      { redirect ? <Redirect to='/home' /> : 
        <div>
          <form onSubmit={onSubmit}>
            <input 
              type='text'
              placeholder='Email'
              value={input}
              onChange={(evt) => setInput(evt.target.value)}
            />
            <input type='submit' value='Submit' />
          </form>
          { error ? <div>{error}</div> : null }
        </div>     
      }
    </>
  )
}

export default Login
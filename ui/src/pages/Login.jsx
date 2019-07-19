import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

import whitelist from '../data/whitelist'
import background from '../assets/imgs/flowers.png'

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

  const onChange = (evt) => {
    setInput(evt.target.value)
    setError('')
  }

  return (
    <>
      <div className='loginMain'>
        { redirect ? <Redirect to='/home' /> : 
          <div className='loginWrapper'>
            <img src={background} alt='background'/>
            <div>
              <h2>RSVP</h2>
              <form onSubmit={onSubmit}>
                <input className='emailInput'
                  type='text'
                  placeholder='Enter your email'
                  value={input}
                  onChange={onChange}
                />
                <input 
                  type='submit' 
                  value='Submit' 
                  hidden={true}
                />
              </form>
              { error ? <div className='loginError'>{error}</div> : null }
            </div>
          </div>     
        }
      </div>
    </>
  )
}

export default Login
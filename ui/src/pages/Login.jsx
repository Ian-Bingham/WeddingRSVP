import React, { useState, useGlobal } from 'reactn'
import { Redirect } from 'react-router-dom';
import { Input } from 'semantic-ui-react'

import wedding from '../assets/imgs/wedding-ppl.svg'
import whitelist from '../data/whitelist'

const Login = () => {
  const [input, setInput] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useGlobal('user')

  const onSubmit = (evt) => {
    evt.preventDefault()

    const User = whitelist.find(u => u.email === input)

    if(User) {
      setError('')
      setUser(User)
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
            <div>
              <h2>RSVP</h2>
              <form onSubmit={onSubmit}>
                <Input className='emailInput'
                  type='text'
                  placeholder='Enter your email'
                  value={input}
                  onChange={onChange}
                />
                <Input 
                  type='submit' 
                  value='Submit' 
                  hidden={true}
                />
              </form>
              { error ? <div className='loginError'>{error}</div> : null }
            </div>
            <img src={wedding}/>
          </div>     
        }
      </div>
    </>
  )
}

export default Login
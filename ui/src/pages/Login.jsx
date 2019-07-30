import React, { useState, useGlobal } from 'reactn'
import { Redirect } from 'react-router-dom';
import { Input } from 'semantic-ui-react'
import axios from 'axios'

import wedding from '../assets/imgs/wedding-ppl.svg'

const Login = () => {
  const [input, setInput] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useGlobal('user')

  const baseUrl = 'http://localhost:4000'

  const onSubmit = async (evt) => {
    evt.preventDefault()

    try {
      const res = await axios.post(`${baseUrl}/user/get`, {
        email: input
      })

      setUser(res.data)
      setRedirect(true)
    } catch(err) {
      setError(err.response.data.error)
      setRedirect(false)
    }
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
                  onChange={(evt) => { setInput(evt.target.value) }}
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
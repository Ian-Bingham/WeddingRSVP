import React, { useState, useGlobal } from 'reactn'
import Toggle from 'react-toggle'
import { Input, Button } from 'semantic-ui-react'
import axios from 'axios'

const RsvpForm = () => {
  const [isGoing, setIsGoing] = useState(false)
  const [user, setUser] = useGlobal('user')
  const [plusOneInput, setPlusOneInput] = useState(null)
  const [foodAllergies, setFoodAllergies] = useState(null)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const baseUrl = 'http://localhost:4000'

  const onSubmit = async (evt) => {
    evt.preventDefault()

    try {
      const res = await axios.patch(`${baseUrl}/user`, {
        email: user.email,
        isGoing: isGoing,
        foodAllergies: foodAllergies
      })

      setSubmitted(true)
    } catch (err) {
      setError(err.response.data.error)
      setSubmitted(false)
    }
  }

  return (
    <>
      {!submitted ? 
        <form className='rsvpForm' onSubmit={onSubmit}>
          <h3>Will you be attending the wedding?</h3>
          <Toggle
            defaultChecked={false}
            name='isGoing'
            value={isGoing}
            onChange={() => setIsGoing(!isGoing)}
          />
          {isGoing ? 
            <div className='rsvpMoreInfo'>
              {user.hasPlusOne ? 
                <Input className='plusOneInput'
                  type='text'
                  placeholder='Email for Plus One'
                  value={plusOneInput}
                  onChange={(evt) => setPlusOneInput(evt.target.value)}
                />
                : <div className='plusOneInput'>Sorry. You are not allowed to bring a plus one.</div>}
              <Input className='allergyInput'
                type='text'
                placeholder='Food Allergies'
                value={foodAllergies}
                onChange={(evt) => setFoodAllergies(evt.target.value)}
              />
            </div>
          : null}
          {error ? <div className='loginError'>{error}</div> : null}
          <Button className='rsvpSubmitBtn' type='submit'>Submit</Button>
        </form>
        : <div>Thank you for your submission!</div>}
    </>
  )
}

export default RsvpForm
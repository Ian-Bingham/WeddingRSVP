import React, { useState, useGlobal } from 'reactn'
import Toggle from 'react-toggle'
import { Input, Button, Select } from 'semantic-ui-react'
import axios from 'axios'

const RsvpForm = () => {
  const [user, setUser] = useGlobal('user')
  const [modalOpen, setModalOpen] = useGlobal('modalOpen')
  const [isGoing, setIsGoing] = useState(user.isGoing)
  const [plusOneGoing, setPlusOneGoing] = useState(user.plusOneGoing)
  const [numChildren, setNumChildren] = useState(user.numChildren)
  const [foodAllergies, setFoodAllergies] = useState(user.foodAllergies)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const numChildrenOptions = [
    { text: '0', value: 0 },
    { text: '1', value: 1 },
    { text: '2', value: 2 },
    { text: '3', value: 3 },
  ]

  const baseUrl = 'http://localhost:4000'

  const onSubmit = async (evt) => {
    evt.preventDefault()

    var plusOne = isGoing ? plusOneGoing : false
    var children = isGoing ? numChildren : 0
    var allergies = isGoing ? foodAllergies : ''

    try {
      const res1 = await axios.patch(`${baseUrl}/user`, {
        email: user.email,
        isGoing: isGoing,
        plusOneGoing: plusOne,
        numChildren: children,
        foodAllergies: allergies
      })

      const res2 = await axios.post(`${baseUrl}/user/get`, {
        email: user.email
      })

      setUser(res2.data)
      setSubmitted(true)
      setTimeout(() => {
        setModalOpen(false)
        setSubmitted(false)
      }, 1500)
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
            defaultChecked={isGoing}
            name='isGoing'
            value={isGoing}
            onChange={() => setIsGoing(!isGoing)}
          />
          {isGoing ? 
            <div className='rsvpMoreInfo'>
              {user.hasPlusOne ? 
                <label>
                  Are you bringing a plus one?
                  <Input 
                    type='checkbox'
                    name='plusOneGoing'
                    checked={plusOneGoing}
                    onChange={() => setPlusOneGoing(!plusOneGoing)}
                  />
                </label>
              : null}  
              <label>
                How many kids younger than two are you bringing?
                <Select 
                  options={numChildrenOptions}
                  value={numChildren}
                  onChange={(evt, {value}) => setNumChildren(value)} 
                />
              </label>  
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
        : <div className='rsvpForm'>Thank you for your submission!</div>}
    </>
  )
}

export default RsvpForm
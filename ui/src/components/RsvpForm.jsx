import React, { useState, useGlobal } from 'reactn'
import Toggle from 'react-toggle'
import { Input, Button } from 'semantic-ui-react'

import whitelist from '../data/whitelist';

const RsvpForm = () => {
  const [rsvpAnswer, setRsvpAnswer] = useState(false)
  const [user, setUser] = useGlobal('user')
  const [plusOneInput, setPlusOneInput] = useState('')
  const [allergies, setAllergies] = useState('')

  const onRsvpChange = (evt) => {
    setRsvpAnswer(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()

    console.log(rsvpAnswer)
  }

  return (
    <form className='rsvpForm' onSubmit={onSubmit}>
      <h3>Will you be attending the wedding?</h3>
      <Toggle
        defaultChecked={false}
        name='rsvpAnswer'
        value={rsvpAnswer}
        onChange={() => setRsvpAnswer(!rsvpAnswer)}
      />
      {rsvpAnswer && user.plusOne ? 
        <div className='rsvpMoreInfo'>
          <Input className='plusOneInput'
            type='text'
            placeholder='Email for Plus One'
            value={plusOneInput}
            onChange={(evt) => setPlusOneInput(evt.target.value)}
          />
          <Input className='allergyInput'
            type='text'
            placeholder='Food allergies'
            value={allergies}
            onChange={(evt) => setAllergies(evt.target.value)}
          />
        </div>
      : null}
      <Button className='rsvpSubmitBtn' type='submit'>Submit</Button>
    </form>
  )
}

export default RsvpForm
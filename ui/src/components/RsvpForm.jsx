import React, { useState, useGlobal } from 'reactn'

import whitelist from '../data/whitelist';

const RsvpForm = () => {
  const [rsvpAnswer, setRsvpAnswer] = useState('no')
  const [user, setUser] = useGlobal('user')
  const [plusOneInput, setPlusOneInput] = useState('')
  const [allergies, setAllergies] = useState('')

  const onRsvpChange = (evt) => {
    setRsvpAnswer(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()

    whitelist[0].allergies = allergies;
  }

  return (
    <form className='rsvpForm' onSubmit={onSubmit}>
      <h3>Will you be attending the wedding?</h3>
      <div className='rsvpOptions'>
        <input 
          type='radio' 
          name='rsvp' 
          value='no' 
          onChange={onRsvpChange}
          checked={rsvpAnswer === 'no'} 
        /> No
        <input 
          type='radio' 
          name='rsvp' 
          value='yes' 
          onChange={onRsvpChange}
          checked={rsvpAnswer === 'yes'} 
        /> Yes
      </div>
      {rsvpAnswer === 'yes' && user.plusOne ? 
        <div className='rsvpMoreInfo'>
          <input className='plusOneInput'
            type='text'
            placeholder='Email for Plus One'
            value={plusOneInput}
            onChange={(evt) => setPlusOneInput(evt.target.value)}
          />
          <input className='allergyInput'
            type='text'
            placeholder='Food allergies'
            value={allergies}
            onChange={(evt) => setAllergies(evt.target.value)}
          />
        </div>
      : null}
      <input className='rsvpSubmitBtn' type='submit' value='Submit'/>
    </form>
  )
}

export default RsvpForm
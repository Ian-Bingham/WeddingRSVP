import React, { useState, useGlobal } from 'reactn'

import whitelist from '../data/whitelist';

const RsvpForm = () => {
  const [rsvpAnswer, setRsvpAnswer] = useState('no')
  const [user, setUser] = useGlobal('user')
  const [plusOne, setPlusOne] = useState('')
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
            value={plusOne}
            onChange={(evt) => setPlusOne(evt.target.value)}
          />
          <input className='allergyInput'
            type='text'
            placeholder='Food allergies'
            value={allergies}
            onChange={(evt) => setAllergies(evt.target.value)}
          />
        </div>
      : null}
      <input type='submit' value='Submit'/>
    </form>
  )
}

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [user, setUser] = useGlobal('user')

  return (
    <>
      <div className='homeMain'>
        <h2>Welcome, {user.email}</h2>
          <button className='rsvpButton' onClick={() => setModalOpen(true)}>RSVP Now</button>
          {modalOpen ? <RsvpForm /> : null}
      </div>
    </>
  )
}

export default Home;
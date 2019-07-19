import React, { useState } from 'react'

const RsvpForm = () => {
  const [rsvpAnswer, setRsvpAnswer] = useState('no')

  const onRsvpChange = (evt) => {
    setRsvpAnswer(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
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
      {}
      <input type='submit' value='Submit'/>
    </form>
  )
}

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className='homeMain'>
        <h2>Welcome, Name</h2>
          <button className='rsvpButton' onClick={() => setModalOpen(true)}>RSVP Now</button>
          {modalOpen ? <RsvpForm /> : null}
      </div>
    </>
  )
}

export default Home;
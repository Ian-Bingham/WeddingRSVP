import React, { useState } from 'react'

const RSVPForm = () => {
  const [RSVPAnswer, setRSVPAnswer] = useState('no')

  const onRSVPChange = (evt) => {
    setRSVPAnswer(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()

    console.log(RSVPAnswer)
  }

  return (
    <form className='rsvpForm' onSubmit={onSubmit}>
      <h3>Will you be attending the wedding?</h3>
      <div className='rsvpOptions'>
        <input 
          type='radio' 
          name='RSVP' 
          value='no' 
          onChange={onRSVPChange}
          checked={RSVPAnswer === 'no'} 
        /> No
        <input 
          type='radio' 
          name='RSVP' 
          value='yes' 
          onChange={onRSVPChange}
          checked={RSVPAnswer === 'yes'} 
        /> Yes
      </div>
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
          {modalOpen ? <RSVPForm /> : null}
      </div>
    </>
  )
}

export default Home;
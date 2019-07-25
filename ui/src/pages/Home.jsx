import React, { useState, useGlobal } from 'reactn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkedAlt, faQuestion } from '@fortawesome/free-solid-svg-icons'

import RsvpForm from '../components/RsvpForm';
import Modal from '../components/Modal';

const Home = () => {
  const [modalOpen, setModalOpen] = useGlobal('modalOpen')
  const [user, setUser] = useGlobal('user')

  return (
    <div className={modalOpen ? 'homeWrapper modalOpen' : 'homeWrapper'}>
      <h2>Welcome, {user.email}</h2>
      <button className='rsvpButton' onClick={() => setModalOpen(true)}>RSVP Now</button>
      {modalOpen ? 
        <Modal>
          <RsvpForm /> 
        </Modal> 
      : null}
      <div className='whatWhenWhereWrapper'>
        <div className='whenInfo'>
          <FontAwesomeIcon icon={faClock} size='3x' color='#607348' />
          <p>July 18, 2020</p>
        </div>
        <div className='whatInfo'>
          <FontAwesomeIcon icon={faQuestion} size='3x' color='#607348' />
          <p>Food, Family, Activities</p>
        </div>
        <div className='whereInfo'>
          <FontAwesomeIcon icon={faMapMarkedAlt} size='3x' color='#607348' />
          <p>Dallas, OR</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
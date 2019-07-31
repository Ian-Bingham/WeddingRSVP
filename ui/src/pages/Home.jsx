import React, { useState, useGlobal } from 'reactn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkedAlt, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'semantic-ui-react'

import RsvpForm from '../components/RsvpForm';
import Modal from '../components/Modal';
import Schedule from '../components/Schedule';

const Home = () => {
  const [modalOpen, setModalOpen] = useGlobal('modalOpen')
  const [user, setUser] = useGlobal('user')

  return (
    <div className={modalOpen ? 'homeWrapper modalOpen' : 'homeWrapper'}>
      <div className='content'>
        <h2>Welcome, {user.email}</h2>
        <Button className='rsvpButton' onClick={() => setModalOpen(true)}>
          <h3>{user.isGoing === null ? 'RSVP Now' : 'Edit RSVP'}</h3>
        </Button>
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
        <div className='scheduleWrapper'>
          <span className='sectionHeader'>
            <FontAwesomeIcon icon={faClock} size='3x' color='#607348' />
            <h3>When</h3>
          </span>
          <div className='scheduleInner'>
          <Schedule 
            header='Friday (July 17th)'
            timeline={[
              '12:00pm - Meetup at venue hangout and setup',
              '5:00pm   - Dinner'
            ]}
          />
          <Schedule
            header='Saturday (July 18th)'
            timeline={[
              '12:45pm - Doors open mix and mingle',
              '1:30pm - Ceremony',
              '2:20pm - Reception/after party'
            ]}
          />
          <Schedule
            header='Sunday (July 19th)'
            timeline={[
              '12:00pm - Cleanup at venue hangout and setup',
              '3:00pm - Lunch'
            ]}
          />
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Home;
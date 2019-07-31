import React, { useState, useGlobal } from 'reactn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkedAlt, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'semantic-ui-react'

import RsvpForm from '../components/RsvpForm';
import Modal from '../components/Modal';
import Schedule from '../components/Schedule';
import Info from '../components/Info';
import activities from '../assets/imgs/activities.svg'
import expect from '../assets/imgs/expect.svg'
import wear from '../assets/imgs/wear.svg'
import foodDrinks from '../assets/imgs/food-drinks.svg'

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
          <div className='sectionInner'>
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

        <div className='whatWrapper'>
          <span className='sectionHeader'>
            <FontAwesomeIcon icon={faQuestion} size='3x' color='#607348' />
            <h3>What</h3>
          </span>
          <div className='sectionInner'>
            <div>
              <img src={expect} />
              <Info
                header='What to Expect'
                info='A celebration of love and joining of two families. Although we love children we feel this event is more suitable for adults only.'
              />
            </div>
            <div>
              <img src={foodDrinks} />
              <Info
                header='Food and Drinks'
                info='Food: Horderves of many varieties will be served. Drinks: There will be an array of drinks available, including tea, lemon aid, mimosas and more!'
              />
            </div>
            <div>
              <img src={activities} />
              <Info
                header='Activities'
                info='While you are enjoying the company of family members old and new you can enjoy the following activites we have set up for you! Giant connect 4, a craft station, photobooth, arcade tetris, live music.'
              />
            </div>
            <div>
              <img src={wear} />
              <Info
                header='What to Wear'
                info='Our dress code is summer evening wear. The event will be outdoors so breathable clothes and comfortable shoes are recomended. We have a recommended color pallet to choose from that will complement the decor and create unified and harmonious pictures.'
              />
           </div>
          </div>
        </div>

        <div className='whereWrapper'>
          <span className='sectionHeader'>
            <FontAwesomeIcon icon={faMapMarkedAlt} size='3x' color='#607348' />
            <h3>Where</h3>
          </span>
          <div className='sectionInner'>
            <Info
              header='Where'
              info='Our wedding will be located at The Willows in Dallas Oregon. Parking is on site. We are planning on staying in a hotel in Dallas for the weekend and then driving back to Portland on Monday. Recommendations for hotels in Portland and in Dallas will come soon'
            />
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Home;
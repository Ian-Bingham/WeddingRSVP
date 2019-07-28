import React, { useGlobal } from 'reactn'

const Modal = (props) => {
  const [modalOpen, setModalOpen] = useGlobal('modalOpen')

  return (
    <div className='modalWrapper'>
      <div className='modalContent'>
        <button className='modalCloseBtn' onClick={() => setModalOpen(false)}>X</button>
        <div className='modalBody'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
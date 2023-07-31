import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import React from 'react'
import '../assets/styles/userView.scss'


export function UserView({ userData, onClose}) {
  return (
    <div className='user-view-container'>
        <h2>User Details</h2>
        <div className='details-cont'>
            <div className='details-text'>
              <b>Name:</b>
              <p>{userData.name}</p>
            </div>
            <div className='details-text'>
              <b>Last Name:</b>
              <p>{userData.lastName}</p>
            </div>
            <div className='details-text'>
              <b>Email:</b> 
              <p>{userData.email}</p>
            </div>
            <button className='close-button' onClick={onClose}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
        </div>
    </div>
  )
}

UserView.propTypes = {
  userData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }),
  onClose: PropTypes.func.isRequired
}

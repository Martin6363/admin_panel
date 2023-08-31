import React from 'react';
import { useParams } from 'react-router';

import '../assets/styles/userView.scss';

export function UserView({ List }) {
    const { id } = useParams();
    const user = List.find((elem) => elem.id === parseFloat(id));
    if (!user) {
        return <div className='not-found-box'><strong>User not found.</strong></div>;
    }

    const { name, lastName, email } = user;

    return (
        <div className='user-view-container'>
            <h2>User Details</h2>
            <div className='details-cont'>
                <div className='details-text'>
                    <b>Name:</b>
                    <p>{name}</p>
                </div>
                <div className='details-text'>
                    <b>Last Name:</b>
                    <p>{lastName}</p>
                </div>
                <div className='details-text'>
                    <b>Email:</b>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
}

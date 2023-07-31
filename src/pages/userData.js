import React, { useState } from 'react'
import { EditInput } from '../component/editInput'
import '../assets/styles/table.scss'
import { UserView } from '../component/UserView';
import PropTypes from 'prop-types';

export function UserData({List, onDelete}) {
    const [updateState, setUpdateState] = useState(-1)
    const [list, setList] = useState(List);
    const [selectedUser, setSelectedUser] = useState(false);
    const [isViewTransform, setViewTransform] = useState(false);

    const handleUpdate = (index) => {
        setUpdateState(index);
    };

    const handleView = (userData) => {
        setSelectedUser(userData);
        setViewTransform(true);
    }

    const handleViewClose = () => {
        setSelectedUser(!selectedUser);
        setViewTransform(false);
    };
return (
    <div className='userData-cont'>
        <table className='table'>
            <thead className='thead'>
                <tr className='thead-tr'>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {
                    List.map((elem, i) => (
                        <tr key={elem.id} className='tbody-tr'>
                            <td>{elem.name}</td>
                            <td>{elem.lastName}</td>
                            <td>{elem.email}</td>
                            <td className='table-button'>
                                <button className='edit-btn' onClick={() => handleUpdate(i)}>
                                    Update
                                </button>
                                <button className='delete-btn' onClick={() => onDelete(elem)}>
                                    Delete
                                </button>
                                <button className='view-btn' onClick={() => handleView(elem)}>
                                    View
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {
            updateState !== -1 && (
                <EditInput current={list[updateState]} setList={setList} setEditingIndex={setUpdateState} />
            )
        }
      <div className={`View-container ${isViewTransform ? 'view-transformed' : ''}`}>
        {
            selectedUser && <UserView
                userData={selectedUser}
                onClose={handleViewClose}
            />
        }
      </div>
    </div>
  )
}

UserData.propTypes = {
    List: PropTypes.arrayOf(
     PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
      onDelete: PropTypes.func.isRequired,
}

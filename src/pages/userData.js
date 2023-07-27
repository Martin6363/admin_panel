import React, { useState } from 'react'
import { EditInput } from '../component/editInput'
import '../assets/styles/table.scss'

export function UserData({List, onDelete}) {
    const [updateState, setUpdateState] = useState(-1)
    const [list, setList] = useState();

    const handleUpdate = (index) => {
        setUpdateState(index);
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
                                <button className='edit-btn' onClick={() => handleUpdate(i)}>Update</button>
                                <button className='delete-btn' onClick={() => {
                                    onDelete(elem)
                                }}>Delete</button>
                                <button className='view-btn'>View</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {
            updateState !== -1 && (
            <EditInput
            current={List[updateState]}
            list={List}
            setList={setList}
            setEditingIndex={setUpdateState}
            />
            )
      }
    </div>
  )
}

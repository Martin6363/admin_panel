import React, { useState } from 'react'
import { EditInput } from '../component/editInput'
import '../assets/styles/table.scss'
import { UserView } from '../component/UserView';
import PropTypes from 'prop-types';
import { Input } from '../component/input';
import { Link, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addData, deleteData, getData } from '../store/data/data.action'


export function UserData({ List, onDelete }) {
    const [updateState, setUpdateState] = useState(-1)
    const [list, setList] = useState(List);

    const dispatch = useDispatch();

    const { data } = useSelector( store => ({
        data: store.dataReducer.data
    }) )

    const handleUpdate = (index) => {
        setUpdateState(index);
    };

return (
    <>
        <Input AddData={(name, lastName, email) => {
          dispatch(addData([
              ...data,
              {
                  name: name,
                  lastName: lastName,
                  email: email,
                  id: Math.random()
              },
          ]));
      }} />
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
                                    <Link to={`/UserView/${elem.id}`} className='view-btn'>
                                        View
                                    </Link>
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
        <div className='View-container'>
            {
                <UserView List={list}/>
            }
        </div>
        </div>
    </>
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

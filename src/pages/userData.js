import React, { useState } from 'react'
import { EditInput } from '../component/editInput'
import '../assets/styles/table.scss'
import { UserView } from '../component/UserView';
import PropTypes from 'prop-types';
import { Input } from '../component/input';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addData } from '../store/data/data.action'


export function UserData({ List, onDelete }) {
    const [updateState, setUpdateState] = useState(-1)
    const [list, setList] = useState(List);
    const dispatch = useDispatch();
    function handleEdit (id) {
        setUpdateState(id)
    }

return (
    <>
        <Input AddData={(name, lastName, email) => {
          dispatch(addData([
              ...List,
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
                        List.map((elem) => (
                            updateState === elem.id 
                            ?
                            <React.Fragment key={elem.id}>
                                <EditInput 
                                    current={elem} 
                                    setList={List} 
                                    setEditingIndex={setList} 
                                    saveEdit={() => setUpdateState(-1)} 
                                />
                            </React.Fragment>
                            :
                            <tr key={elem.id} className='tbody-tr'>
                                <td>{elem.name}</td>
                                <td>{elem.lastName}</td>
                                <td>{elem.email}</td>
                                <td className='table-button'>
                                    <button className='edit-btn' onClick={() => handleEdit(elem.id)}>
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

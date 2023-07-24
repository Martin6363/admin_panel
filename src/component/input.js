import '../assets/styles/input.scss'
import React, { useState } from 'react'

export function Input({ AddData }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    function handleAddData () {
        if ((name.trim() && lastName.trim() && email.trim()) !== "") {
          AddData(name, lastName, email)
          setName("")
          setLastName("")
          setEmail("")
        }
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleAddData()
      }
    };

  return (
    <div className='input-cont'>
      <input
        type='text'
        name="name"
        placeholder="Enter Name"
        value={name}
        onKeyPress={handleKeyPress}
        onChange={(e) => {
            setName(e.target.value);
        }}
      />
      <input 
        type='text'
        name="lastName"
        placeholder="Enter LastName"
        value={lastName}
        onKeyPress={handleKeyPress}
        onChange={(e) => {
            setLastName(e.target.value);
        }}
      />
      <input
        type='text'
        name="email"
        placeholder="Enter Email"
        value={email}
        onKeyPress={handleKeyPress}
        onChange={(e) => {
            setEmail(e.target.value);
        }}
      />
      <button className='add-button' onClick={handleAddData}>Add</button>
    </div>
  )
}

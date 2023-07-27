import '../assets/styles/input.scss'
import React, { useState } from 'react'

export function Input({ AddData }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isEmailChecked, setIsEmailChecked] = useState(false);

    function emailValidation (e) {
      const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailValue = e.target.value;
      setEmail(emailValue);
      setIsEmailChecked(true)
      setIsEmailValid(regEx.test(emailValue));
    }

    function handleAddData() {
      const isInputValid = ((name.trim() && lastName.trim() && email.trim()) !== "");
      if (isEmailValid && isInputValid) {
        AddData(name, lastName, email);
        setName("");
        setLastName("");
        setEmail("");
        setIsEmailChecked(true);
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
        className={name.length !== 0 ? "email-success" : ""}
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
        className={lastName.length !== 0 ? "email-success" : ""}
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
        className={email.length === 0 ? "" : (isEmailChecked ? (isEmailValid ? "email-success" : "email-error") : "")}
        placeholder="Enter Email"
        value={email}
        onKeyPress={handleKeyPress}
        onChange={emailValidation}
      />
      <button className='button add-button' onClick={handleAddData}>Add</button>
    </div>
  )
}

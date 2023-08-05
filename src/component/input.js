import '../assets/styles/input.scss'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"

export function Input({ AddData }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm();

    console.log(errors)
    function emailValidation (e) {
      const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailValue = e.target.value;
      setEmail(emailValue);
      setIsEmailChecked(true)
      setIsEmailValid(regEx.test(emailValue));
    }

    function handleAddData(e) {
      e.preventDefault()
      const isInputValid = ((name.trim() && lastName.trim() && email.trim()) !== "");
      if (isEmailValid && isInputValid) {
        AddData(name, lastName, email);
        setName("");
        setLastName("");
        setEmail("");
        setIsEmailChecked(true);
      }
    }

    const onSubmit = (data) => {
      console.log(data);
    }

  return (
    <form className='input-cont' onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        name="name"
        className={name.length !== 0 ? "email-success" : ""}
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
            setName(e.target.value);
        }}
        {...register({required: "Name is required"})}
      />
      <input 
        type='text'
        name="lastName"
        className={lastName.length !== 0 ? "email-success" : ""}
        placeholder="Enter LastName"
        value={lastName}
        onChange={(e) => {
            setLastName(e.target.value);
        }}
        {...register({required: "LastName is required"})}
      />
      <input
        type='text'
        name="email"
        className={email.length === 0 ? "" : (isEmailChecked ? (isEmailValid ? "email-success" : "email-error") : "")}
        placeholder="Enter Email"
        value={email}
        onChange={emailValidation}
        {...register({required: "Email is required"})}
      />
      <button className='button add-button' onClick={handleAddData}>Add</button>
    </form>
  )
}

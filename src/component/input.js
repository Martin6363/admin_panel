import '../assets/styles/input.scss'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"

export function Input({ AddData }) {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();

    const onSubmit = (data) => {
      if (data.name && data.lastName && data.email) {
        AddData(data.name, data.lastName, data.email);
        reset();
      }
    }

  return (
    <form className='input-cont' onSubmit={handleSubmit(onSubmit)}>
      <div className='input-box'>
        <input
          className={`${errors.name && "invalid"}`}
          type='text'
          name="name"
          placeholder="Enter Name"
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^(?! +$).*$/,
              message: "Name must not be empty",
            },
          })}
        />
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <div className='input-box'>
        <input 
          className={`${errors.lastName && "invalid"}`}
          type='text'
          name="lastName"
          placeholder="Enter LastName"
          {...register("lastName", {
            required: "LastName is required",
            pattern: {
              value: /^(?! +$).*$/,
              message: "Last Name must not be empty",
            },
          })}
        />
        {errors.lastName && <small>{errors.lastName.message}</small>}
      </div>
      <div className='input-box'>
        <input 
          className={`${errors.email && "invalid"}`}
          type='text'
          name="email"
          placeholder="Enter Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && (<small>{errors.email.message}</small>)}
      </div>
      <button className='button add-button' onClick={onSubmit}>Add</button>
    </form>
  )
}

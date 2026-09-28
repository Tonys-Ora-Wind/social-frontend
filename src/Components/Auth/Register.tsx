import React, { useState } from 'react'
import { type RegisterData } from '../types/user';

import './Register.css';

import { register } from '../services/api';

export default function Register() {

  const [formData, setFormData] = useState<RegisterData>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(formData);
      alert('User registed successfully');
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className='register-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        <input className='register-input' type='text' name='username' placeholder='Username' onChange={handleChange} />
        <input className='register-input' type='email' name='email' placeholder='Email' onChange={handleChange} />
        <input className='register-input' type='password' name='password' placeholder='Password' onChange={handleChange} />
        <button className='register-button' type="submit">Register</button>
      </form>
    </div>
  )
}

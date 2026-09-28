import React, { useState } from 'react'
import { type LoginData } from '../types/user';

import './Login.css';

import { login } from '../services/api';

export default function Login() {

  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const {data} = await login(formData);
      // console.log("data: ", data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      alert('User loggedin successfully');
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <input className='login-input' type='email' name='email' placeholder='Email' onChange={handleChange} />
        <input className='login-input' type='password' name='password' placeholder='Password' onChange={handleChange} />
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  )
}

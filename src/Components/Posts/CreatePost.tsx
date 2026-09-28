import React, {useState} from 'react'

import './CreatePost.css'

import { createPost } from '../services/api'

export default function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      createPost({content})
      setContent('');
      alert('create post successfully');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='create-post-container'>
      <form className='create-post-form' onSubmit={handleSubmit}>
        <textarea name='content'
        id=''
        placeholder='whats on your mind'
        value={content}
        className='create-post-textarea'
        onChange={(e) => {setContent(e.target.value)}}
        >
        </textarea>
        <button className='create-post-button' type='submit'>Post</button>
      </form>
    </div>
  )
}

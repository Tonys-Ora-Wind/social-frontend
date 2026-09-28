import React, { useState } from 'react'

import './Post.css';
import { type PostType } from '../types/post';
import { likePost, commentOnPost } from '../services/api';

export default function Post({post} : {post: PostType}) {

  const [likes, setLikes] = useState(post.likes?.length);
  const [comments, setComments] = useState(post.comments);

  const handleLike = async () => {
    try {
      await likePost(post._id);
      setLikes((prevVal) => (prevVal as number) + 1);
      alert('like added successfully');
    } catch(e) {
      console.log(e);
    }
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target.elements);
    const target = e.target as HTMLFormElement;
    const content = target.elements.namedItem('comment') as HTMLInputElement;
    const commentValue = content.value;
    try {
      const {data} = await commentOnPost(post._id, {content: commentValue});
      content.value = '';
      setComments((prevComments) => prevComments?[...prevComments, data.comment] : [data.comment]);
      alert('comment successfully');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='post-container'>
      <p className='post-content'>{post.content}</p>
      <button className='post-like-button' onClick={handleLike}>{likes} Like</button>
      <form className='form-style' onSubmit={handleSubmit}>
        <input type='text' name='comment' placeholder='Add the comment' className='post-comment-input' />
        <button className='post-comment-button' type='submit'>Comment</button>
      </form>
      <div className='post-comments'>
        { comments?.map((comment)=>(
            <p className='post-comment' key={comment._id}>{comment.content}</p>
          ))
        }
      </div>
    </div>
  )
}

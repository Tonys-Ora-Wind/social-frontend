import {useEffect, useState} from 'react'

import { fetchPosts } from '../services/api'

import { type PostType } from '../types/post';
import Post from '../Posts/Post';

export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const {data} = await fetchPosts();
      setPosts(data);
    }
    getPosts();
  }, [])

  console.log(posts);
  return (
    <div className='feed-container'>
      {
        posts.map((post) => <Post key={post._id} post={post} />)
      }
    </div>
  )
}

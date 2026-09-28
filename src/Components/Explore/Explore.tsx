import React, {useEffect, useState} from 'react'

import './Explore.css';

import { fetchExploreUsers, followUser, unFollowUser } from '../services/api';

import { type User } from '../types/user';

export default function Explore() {

  const [users, setUsers] = useState<User[]>([]);

  const handleFollow = async (userId: string) => {
    try {
      const response = await followUser(userId);
      setUsers(() => response.data.users);
    } catch (e) {
      console.log(e);
    }
  }
  const handleUnFollow = async (userId: string) => {
    try {
      const response = await unFollowUser(userId);
      setUsers(() => response.data.users);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetchExploreUsers();
      setUsers(() => response.data);
      console.log('users', response.data);
    }
    fetchUsers();
  }, []);
  
  return (
    <div className='explore-container'>
      <h1> Explore Users </h1>    
      <ul className='user-list'>
        {
          users.map((user : User) => (
            <li className='user-item' key={user._id}>
              <h2>{user.username}</h2>
              <p>{user.email}</p>
              <p>Followers:{user.followers.length}</p>
              <p>Following:{user.following.length}</p>
              {
                user.isFollowing?(
                  <button className='unfollow-button' onClick={()=>handleUnFollow(user._id)}>unfollow</button>
                ):
                (
                  <button className='follow-button' onClick={()=>handleFollow(user._id)}>follow</button>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { fetchUserById, followUser, unFollowUser } from '../services/api';
import { type User } from '../types/user';

import './UserProfile.css';

export default function UserProfile() {

  const {userId} = useParams();

  const [user, setUser] = useState<User|null>(null);
  const [isFollowing, setIsFollowing] = useState<boolean|null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {data} = await fetchUserById(userId);
        setUser(() => data);
        setIsFollowing(() => data.followers.includes(localStorage.getItem('userId')));
        console.log(data, data.followers.includes(localStorage.getItem('userId')));

      } catch(err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [userId]);

  const handleUnfollow = async () => {
    try {
      await unFollowUser(userId as string);
      setIsFollowing(() => false);
    } catch(err) {
      console.log(err);
    }
  }
  const handleFollow = async () => {
    try {
      await followUser(userId as string);
      setIsFollowing(() => true);
    } catch(err) {
      console.log(err);
    }
  }

  if (!user) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='user-profile-container'>
      <h1 className='username'>{user?.username}</h1>
      <p className='username'>{user?.email}</p>
      {
        isFollowing?
        <button className='user-profile-button' onClick={handleUnfollow}>Unfollow</button>
        :
        <button className='user-profile-button' onClick={handleFollow}>Follow</button>
      }
    </div>
  )
}

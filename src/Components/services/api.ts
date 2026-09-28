import axios from 'axios';
import {type RegisterData, type LoginData} from '../types/user';

const API = axios.create({baseURL: "http://172.20.1.123:3000/api"});

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? {authorization: `bearer ${token}`} : {};
}

export const register = (userData: RegisterData) => API.post('/user/register', userData);
export const login = (userData: LoginData) => API.post('/user/login', userData);
export const fetchPosts = () => API.get('/posts', {headers: getAuthHeader()});
export const createPost = (postData: {content: string}) => API.post('/posts', postData, {headers: getAuthHeader()});

export const likePost = (postId: string) => API.post(`/posts/${postId}/like`, {}, {headers: getAuthHeader()});
export const commentOnPost = (postId : string, commentData: {content: string}) => API.post(`/posts/${postId}/comment`, commentData, {headers: getAuthHeader()});

export const followUser = (userId: string) => API.post(`/user/${userId}/follow`, {}, {headers: getAuthHeader()});
export const unFollowUser = (userId: string) => API.post(`/user/${userId}/unfollow`, {}, {headers:getAuthHeader()});
export const fetchExploreUsers = () => API.get(`/user/explore`, {headers: getAuthHeader()});
export const fetchUserById = (userId: string | undefined) => API.get(`/user/${userId}`, {headers: getAuthHeader()});
export interface RegisterData{
  username: string,
  email: string,
  password: string
}

export type LoginData = Omit<RegisterData, 'username'>;

interface NormalType {
  _id: string,
  username?: string,
  email?: string
}

export interface User {
  _id: string,
  username: string,
  email: string,
  password?: string | undefined,
  followers: NormalType[],
  following: NormalType[],
  isFollowing?: boolean | undefined
}
export interface PostType {
  _id: string,
  user: {_id: string, username: string, email: string},
  content: string,
  likes?: {_id: string, username: string}[],
  comments?: Omit<PostType, 'likes'>[]
  createdAt: string
}
export interface Post {
  id: number;
  content: string;
  createdAt: string;
}

export interface PostState {
  posts: [Post] | null;
}

export interface Post {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    username: string;
    email: string;
    password: null;
    googleId: string;
    avatar: string;
  };
}

export interface PostState {
  posts: [Post] | null;
}

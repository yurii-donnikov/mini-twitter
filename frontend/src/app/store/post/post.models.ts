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

export interface PostsResponse {
  data: Post[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ComposeredPost {
  content: string;
}

export interface PostState {
  posts: Post[] | null;
  meta: {
    total?: number;
    page: number;
    limit: number;
    totalPages?: number;
  };
  loading?: boolean;
  error?: any;
}

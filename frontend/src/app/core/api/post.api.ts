import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';
import {
  Post,
  ComposeredPost,
  PostsResponse,
} from '../../store/post/post.models';

@Injectable({ providedIn: 'root' })
export class PostApi {
  http = inject(HttpClient);

  myPosts(page = 1, limit = 10): Observable<PostsResponse> {
    const params = new HttpParams().set('page', page).set('limit', limit);

    return this.http.get<PostsResponse>(`${environment.apiUrl}/post/posts`, {
      params,
    });
  }

  createPost(post: ComposeredPost): Observable<PostsResponse> {
    return this.http.post<PostsResponse>(`${environment.apiUrl}/post`, post);
  }

  deletePost(id: number): Observable<PostsResponse> {
    return this.http.delete<PostsResponse>(`${environment.apiUrl}/post/${id}`);
  }
}

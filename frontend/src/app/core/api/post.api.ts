import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';
import { ComposeredPost, PostsResponse } from '../../store/post/post.models';

@Injectable({ providedIn: 'root' })
export class PostApi {
  http = inject(HttpClient);

  getAllPosts(page = 1, limit = 10): Observable<PostsResponse> {
    const params = new HttpParams().set('page', page).set('limit', limit);

    return this.http.get<PostsResponse>(`${environment.apiUrl}/posts`, {
      params,
    });
  }

  createPost(post: ComposeredPost): Observable<PostsResponse> {
    return this.http.post<PostsResponse>(`${environment.apiUrl}/posts`, post);
  }

  deletePost(id: number): Observable<PostsResponse> {
    return this.http.delete<PostsResponse>(`${environment.apiUrl}/posts/${id}`);
  }
}

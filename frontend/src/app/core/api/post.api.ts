import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';
import { Post, ComposeredPost } from '../../store/post/post.models';

@Injectable({ providedIn: 'root' })
export class PostApi {
  http = inject(HttpClient);

  myPosts(): Observable<[Post]> {
    return this.http.get<[Post]>(`${environment.apiUrl}/post/posts`);
  }

  createPost(post: ComposeredPost): Observable<[Post]> {
    return this.http.post<[Post]>(`${environment.apiUrl}/post`, post);
  }

  deletePost(id: number): Observable<[Post]> {
    return this.http.delete<[Post]>(`${environment.apiUrl}/post/${id}`);
  }
}

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';
import { Post } from '../../store/post/post.models';

@Injectable({ providedIn: 'root' })
export class PostApi {
  http = inject(HttpClient);

  myPosts(): Observable<[Post]> {
    return this.http.get<[Post]>(`${environment.apiUrl}/post/posts`);
  }
}

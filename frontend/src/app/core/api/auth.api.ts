import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';
import { User } from '../../store/user/user.models';

@Injectable({ providedIn: 'root' })
export class AuthApi {
  http = inject(HttpClient);

  me(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/auth/me`);
  }

  userById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}

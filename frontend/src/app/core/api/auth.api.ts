import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environment';

interface LoginResponse {
  user: any;
  //token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthApi {
  http = inject(HttpClient);

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/login`, {
      email,
      password,
    });
  }

  me(): Observable<LoginResponse> {
    return this.http.get<LoginResponse>(`${environment.apiUrl}/auth/me`);
  }
}

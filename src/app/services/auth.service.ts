import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'http://localhost:8020/memo-api';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/v1/auth/register', user);
  }
  login(credentials: any): Observable<any> {
    return this.http.post(
      this.baseURL + '/api/v1/auth/authenticate',
      credentials
    );
  }
}

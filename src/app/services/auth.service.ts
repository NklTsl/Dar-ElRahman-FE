import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {BackendEndpoints} from "../constants/backend-endpoints";
import {Router} from "@angular/router";
import {AppRoutes} from "../constants/app-routes";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    return this.http.post(`${environment.memoApiUrl}${BackendEndpoints.register}`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${environment.memoApiUrl}${BackendEndpoints.login}`,
      credentials
    );
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl(`/${AppRoutes.LOGIN}`).then();
  }
}

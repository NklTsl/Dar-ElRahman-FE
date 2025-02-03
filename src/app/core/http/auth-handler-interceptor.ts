import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHandlerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
      request: HttpRequest<any>,
      next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if(this.isPublicEndpoint(request)){
      return next.handle(request);
    }
    else{
      return next.handle(this.addRequiredHeaderProperties(request));
    }
  }

  isPublicEndpoint(request: HttpRequest<any>){
    return request.url.endsWith('/register') || request.url.endsWith('/authenticate');
  }

  private addRequiredHeaderProperties(
      request: HttpRequest<any>,
  ): HttpRequest<any> {

    const session_token = localStorage.getItem('token');

    let requestHeaders = {
      headers: request.headers
          .set('Authorization', 'Bearer ' + session_token)
    };

    return request.clone(requestHeaders);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthHandlerInterceptor, multi: true },
];

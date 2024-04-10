import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, tap, filter } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('interceptor', request.urlWithParams);

    return next.handle(request).pipe(
      // filter(
      //   (event) =>
      //    event instanceof HttpResponse && request.url.includes('login')
      // ),
      tap((req) => {
        if(req instanceof HttpResponse && request.url.includes('login')) {
          console.log(req);
          const userData = JSON.stringify({accessToken: req.body.accessToken, _id: req.body._id});
          sessionStorage.setItem('userData', userData);
        }

      }),
      catchError((err) => {
        console.error('error', err);
        return EMPTY;
      })
    );
  }
}

export const appHttpInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AppHttpInterceptor,
};

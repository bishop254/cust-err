import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class HttpCallsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry({
        count: 3,
        delay: 1500,
      }),
      catchError((err) => {
        console.log('HTTP Calls: Catched error 1️⃣');
        return throwError(() => {
          console.log('HTTP Calls: Error rethrown');
          return err;
        });
      })
    );
  }
}

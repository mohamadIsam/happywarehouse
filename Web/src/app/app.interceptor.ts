import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { LoaderService } from './shared/services/loader.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('token');
    const loaderService = inject(LoaderService);
    loaderService.showLoader();
    const request = req.clone({
      url: environment.baseUrl + req.url,
      headers: token
        ? req.headers.set('Authorization', `Bearer ${token}`)
        : req.headers,
      withCredentials: true,
    });
    return next.handle(request).pipe(
      finalize(() => {
        loaderService.hideLoader();
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      })
    );
  }
}

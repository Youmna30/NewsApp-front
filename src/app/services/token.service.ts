import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private authService:AuthService) { }
  intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    let auth = this.authService.getToken()

    let tokenReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${auth}`
      }
    })
    return next.handle(tokenReq)
  }
}

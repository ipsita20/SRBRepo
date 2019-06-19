import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as appGlobals from '../appGlobals/globalVariables';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient, private router: Router) { }
  login(): Observable<any> {
    // const res = this.httpClient.get<any>(appGlobals.loginUrl, this.httpOptions);
    const res = this.httpClient.get<any>(appGlobals.test, this.httpOptions);
    return res;
  }
}

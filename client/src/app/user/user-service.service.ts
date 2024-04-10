import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../types/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private API = 'http://localhost:3030/users';
  private headers = {'Content-Type': 'application/json'};
  constructor(private http: HttpClient ) { }

  getOneUser(email: string, password: string): Observable<UserData> {
    return this.http.post<UserData>(`${this.API}/login`, {
      "email": email,
      "password": password,
    }, {headers: this.headers});
  }

  registerOneUser(email: string, password: string): Observable<UserData> {
    return this.http.post<UserData>(`${this.API}/register`, {
      "email": email,
      "password": password,
    }, {headers: this.headers});
  }

}

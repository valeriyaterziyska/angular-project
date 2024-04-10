import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserData } from '../types/user-data';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private API = 'http://localhost:3030/users';
  private headers = { 'Content-Type': 'application/json' };

  private loggedUser = new BehaviorSubject<UserData | null> (null);

  constructor(private http: HttpClient) {}

  getLoggedUser(): Observable<UserData | null> {
    return this.loggedUser.asObservable();
  }

  loginUser(email: string, password: string): Observable<UserData> {
    return this.http.post<UserData>(
      `${this.API}/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: this.headers,
      }
    ).pipe(tap((user: UserData) => this.loggedUser.next(user)))
  }

  registerUser(email: string, password: string): Observable<UserData> {
    return this.http.post<UserData>(
      `${this.API}/register`,
      {
        email: email,
        password: password,
      },
      { headers: this.headers }
    );
  }
}

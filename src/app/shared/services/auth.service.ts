import { USER } from './../../model/mock-data/mock-user';
import { User } from './../../user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userList(): Observable<User[]> {
    return of(USER);
  }

  constructor() {}
}

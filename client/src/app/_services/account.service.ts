import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { AppSettingsService } from '../shared/appsettings.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl!: string;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(
    private appSettingsService: AppSettingsService,
    private http: HttpClient
  ) {
    this.setBaseUrl();
  }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          console.log('USER: ', user);
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {
          console.log('USER: ', user);
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(undefined);
  }

  setBaseUrl() {
    this.baseUrl = this.appSettingsService.getSettings().defaultUrl;
  }
}

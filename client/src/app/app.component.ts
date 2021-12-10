import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AppSettings } from './shared/app-settings';
import { AppSettingsService } from './shared/appsettings.service';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  settings!: AppSettings;
  constructor(
    private http: HttpClient,
    private appSettingsService: AppSettingsService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.setBaseUrl();
    this.setCurrentUser();
  }
  
  setCurrentUser() {
    const userAsJson = localStorage.getItem('user');
    if (userAsJson) {
      const user: User = JSON.parse(userAsJson);
      this.accountService.setCurrentUser(user);
    }
  }

  setBaseUrl() {
    this.settings = this.appSettingsService
    .getSettings();
  }
}

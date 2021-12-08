import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppSettings } from './shared/app-settings';
import { AppSettingsService } from './shared/appsettings.service';

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
    private appSettingService: AppSettingsService
  ) {}

  ngOnInit(): void {
    this.appSettingService
      .getSettings()
      .subscribe((settings) => (this.settings = settings));
    this.getusers();
  }

  getusers() {
    this.http.get(this.settings.defaultUrl + '/api/users/').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettingsService } from '../shared/appsettings.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl!: string;
  constructor(
    private appSettingsService: AppSettingsService,
    private http: HttpClient
  ) {
    this.appSettingsService
      .getSettings()
      .subscribe((settings) => (this.baseUrl = settings.defaultUrl));
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }

  logout() {}
}

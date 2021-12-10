import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable, of } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/of';
import { AppSettings } from './app-settings';

const SETTINGS_LOCATION = '../../assets/appsettings.json';
const SETTINGS_KEY = 'configuration';
@Injectable()
export class AppSettingsService {
  // constructor(private http: Http) {
  // }
  getSettings(): AppSettings {
    const settings = localStorage.getItem(SETTINGS_KEY);

    if (settings) {
      return JSON.parse(settings);
    } else {
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', SETTINGS_LOCATION, false); //
      xmlHttp.send(null);
      const appSettings = JSON.parse(xmlHttp.responseText) as AppSettings;
      if (settings) {
        this.saveSettings(appSettings);
      }
      return appSettings;
    }
  }

  saveSettings(settings: AppSettings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }
}

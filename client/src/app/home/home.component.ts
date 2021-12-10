import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../shared/appsettings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  constructor(
    private appSettingsService: AppSettingsService
  ) {}

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
    console.log('Home registerMode', this.registerMode);
  }  

  cancelRegisterMode(event: boolean) {
    console.log('cancelRegisterMode event: ', event);
    this.registerMode = event;
    console.log('Home registerMode', this.registerMode);
  }
}

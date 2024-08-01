import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-ui';
  item: any;
  env: any;
  weather: any;
  helloMessage: any;
  name: string = ''; // Variable to hold the name input

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Initialize any data if needed
  }

  callItem() {
    this.apiService.getItem().subscribe((data) => {
      this.item = data;
    });
  }

  callEnv() {
    this.apiService.getEnv().subscribe((data) => {
      this.env = data;
    });
  }

  callWeather() {
    this.apiService.getWeather('BlaBlaBla').subscribe((data) => {
      this.weather = data;
    });
  }

  callSayHello() {
    this.apiService.sayHello(this.name).subscribe((data) => {
      this.helloMessage = data;
    });
  }
}

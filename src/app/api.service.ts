// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Import environment

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.baseUrl; // Use environment variable

  constructor(private http: HttpClient) {}

  getItem(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/item`);
  }

  getEnv(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/env`);
  }

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/weather`, { params: { city } });
  }

  sayHello(name: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/hello`, { name });
  }
}

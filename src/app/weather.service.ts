// src/app/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '1417afec13d08cc32e22b7f3161e796b';

  constructor(private http: HttpClient) {}

  getWeather(city: string = 'Paris'): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}

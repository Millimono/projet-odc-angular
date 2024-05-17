import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  temperature: number | null = null;
  city: string = 'Paris'; // Ville par défaut

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.temperature = data.main.temp;
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  onCityChange(newCity: string): void {
    this.city = newCity;
    this.getWeather();
  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weathers = []
  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit() {
    this.weatherService.getWeathers().subscribe(
      data => {
        this.weathers = data
      }
    )
  }

  onWeatherClicked(weather) {
    localStorage.setItem('weather', JSON.stringify(weather))
    this.router.navigateByUrl('/detail');
  }
}

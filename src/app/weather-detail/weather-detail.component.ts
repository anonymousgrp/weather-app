import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  weather = <any>{}
  constructor(private location: Location) { }

  ngOnInit() {
    this.weather = JSON.parse(localStorage.getItem('weather'))
  }

  goBack() {
    this.location.back();
  }
}

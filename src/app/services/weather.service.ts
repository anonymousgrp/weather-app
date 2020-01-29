import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEATHER_URL } from  '../const';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weathers = []

  constructor(
    private http: HttpClient
  ) { }

  getWeathers(): Observable<any[]> {
    return this.http.get<any>('./assets/dataset.json')
  }
}

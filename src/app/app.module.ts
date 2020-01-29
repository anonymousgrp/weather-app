import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { CityInputComponent } from './city-input/city-input.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    CityInputComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

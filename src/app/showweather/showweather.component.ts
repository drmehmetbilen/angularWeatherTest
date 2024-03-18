import { Component } from '@angular/core';
import { WmService } from '../wm.service';

@Component({
  selector: 'app-showweather',
  templateUrl: './showweather.component.html',
  styleUrl: './showweather.component.css'
})
export class ShowweatherComponent {

  weatherData:any;
  cityName:string;

  constructor(private srv:WmService)
  {

    this.weatherData = this.getWeather();
 
    this.cityName = this.srv.getSelectedCity();

  }

  getWeather()
  {
    return this.srv.getWeather().then((data) => {
      this.weatherData = data;
      console.log(this.weatherData.temperature2m);
    });
  }

  


}

import { Injectable } from '@angular/core';
import { city,cityManager } from './cityInfo';
import { fetchWeatherApi } from 'openmeteo';

@Injectable({
  providedIn: 'root'
})
export class WmService {

  constructor() { }

  getCities(){

    const newManager = new cityManager()
    return newManager.getCities();

  }
  selectedCity:string = "";
  selectCity(name:string)
  {
    console.log("Şehir seçildi."+name)
    const newManager = new cityManager()
    newManager.getCities().find((element:city) => {
      if(element.name == name)
      {
        this.params.latitude = element.lat;
        this.params.longitude = element.long;
        console.log("Şehir bilgileri.");
        console.log(element.lat)
        console.log(element.long)
      }
    });
    this.selectedCity = name;

  }
  getSelectedCity()
  {
    return this.selectedCity;
  }

   params = {
    "latitude": 37.7203,
    "longitude": 30.2908,
    "current": ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "is_day", "precipitation", "rain", "showers", "snowfall", "weather_code", "cloud_cover", "pressure_msl", "surface_pressure", "wind_speed_10m"],
    "hourly": ["temperature_2m", "relative_humidity_2m", "rain", "wind_speed_10m"]
  };

  async getWeather(){

   
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, this.params);
    
    const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const current = response.current()!;
const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		sicaklik: current.variables(0)!.value(),
		nem: current.variables(1)!.value(),
		apparentTemperature: current.variables(2)!.value(),
		isDay: current.variables(3)!.value(),
		precipitation: current.variables(4)!.value(),
		yagmur: current.variables(5)!.value(),
		showers: current.variables(6)!.value(),
		snowfall: current.variables(7)!.value(),
		weatherCode: current.variables(8)!.value(),
		cloudCover: current.variables(9)!.value(),
		pressureMsl: current.variables(10)!.value(),
		surfacePressure: current.variables(11)!.value(),
		ruzgar: current.variables(12)!.value(),
	
	

};


return weatherData;



  }




}

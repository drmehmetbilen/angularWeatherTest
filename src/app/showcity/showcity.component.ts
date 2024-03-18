import { Component } from '@angular/core';
import { WmService } from '../wm.service';

@Component({
  selector: 'app-showcity',
  templateUrl: './showcity.component.html',
  styleUrl: './showcity.component.css'
})
export class ShowcityComponent {

  constructor(private srv:WmService)
  {


  }

  getCities(){

    return this.srv.getCities();

  }

  setCity(name:string)
  {
    this.srv.getWeather();
    this.srv.selectCity(name);
  }



}

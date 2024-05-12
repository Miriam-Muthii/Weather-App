import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { faDropletSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})



export class WeatherComponent {
city!:string;
weatherData:any;
faCloudSunRain=faCloudSunRain;
faTemperatureHalf=faTemperatureHalf;
faDropletSlash=faDropletSlash;


constructor(private service: ServiceService){}

ngOnInit(){

}

getWeather(){
  console.log('Fetching weather for city:', this.city);
  this.service.getWeather(this.city).subscribe(data=>{
    this.weatherData = data;
    console.log('Weather data received:', data);
  })
}



}

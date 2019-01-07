import { Component, OnInit } from '@angular/core';
import { Planet } from '../classes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.apiService.getPlanets().then(data => { this.planets = data; console.log(this.planets); });
  }

}

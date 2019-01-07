import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../classes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.apiService.getVehicles().then(data => { this.vehicles = data; console.log(this.vehicles); });
  }
}

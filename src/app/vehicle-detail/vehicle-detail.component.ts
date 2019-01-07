import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;

  constructor(
    private  apiService:  ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getStarship(id).then(data => { this.vehicle = data; console.log(this.vehicle);

    if (this.vehicle.films[0] !== 'unknown') {
      for (let i = 0; i < this.vehicle.films.length; i++) {
      this.apiService.getFilmsname(this.vehicle.films[i]).then(res => {this.vehicle.films[i] = res;
        console.log(this.vehicle.films[i]); });
      }
    }

    if (this.vehicle.pilots[0] !== 'unknown') {
      for (let i = 0; i < this.vehicle.pilots.length; i++) {
      this.apiService.getCharactersname(this.vehicle.pilots[i]).then(res => {this.vehicle.pilots[i] = res;
        console.log(this.vehicle.pilots[i]); });
      }
    }

  });

  }
}

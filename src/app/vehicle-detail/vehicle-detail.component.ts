import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;
  private ngNavigatorShareService: NgNavigatorShareService;

  constructor(
    ngNavigatorShareService: NgNavigatorShareService,
    private  apiService:  ApiService,
    private route: ActivatedRoute
  ) { this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.apiService.getVehicle(id).then(data => { this.vehicle = data; console.log(this.vehicle);

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

  shareAPI() {
    this.ngNavigatorShareService.share({
      title: 'My Awesome app',
      text: 'Hey check out my Share button',
      url: 'http://www.codershood.info/2018/06/17/how-to-use-web-share-api-in-your-angular-applications/'
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}

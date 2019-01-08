import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;
  private ngNavigatorShareService: NgNavigatorShareService;
  comments: string;

  constructor(
    private storage: LocalStorageService,
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

    this.comments = this.storage.retrieve(this.route.snapshot['_routerState'].url);
    console.log(this.comments);

  });

  }

  saveValue() {
    this.storage.store(this.route.snapshot['_routerState'].url, this.comments);
    console.log(this.comments);
  }

  shareAPI() {
    if (this.ngNavigatorShareService.share) {
      this.ngNavigatorShareService.share({
          title: 'StarWars',
          text: 'Hey Check Out My App',
          url: 'https://kjiakai.github.io/StarWars-ghp/',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    }
  }
}

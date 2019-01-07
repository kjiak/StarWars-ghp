import { Component, OnInit } from '@angular/core';
import { Planet } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  planet: Planet;

  constructor(
    private  apiService:  ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getPlanet(id).then(data => { this.planet = data; console.log(this.planet);

    if (this.planet.films[0] !== 'unknown') {
      for (let i = 0; i < this.planet.films.length; i++) {
      this.apiService.getFilmsname(this.planet.films[i]).then(res => {this.planet.films[i] = res;
        console.log(this.planet.films[i]); });
      }
    }

    if (this.planet.residents[0] !== 'unknown') {
      for (let i = 0; i < this.planet.residents.length; i++) {
      this.apiService.getCharactersname(this.planet.residents[i]).then(res => {this.planet.residents[i] = res;
        console.log(this.planet.residents[i]); });
      }
    }

  });

  }

}

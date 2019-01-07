import { Component, OnInit } from '@angular/core';
import { Planet } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  planet: Planet;
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

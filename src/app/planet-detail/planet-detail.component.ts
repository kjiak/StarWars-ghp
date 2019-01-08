import { Component, OnInit } from '@angular/core';
import { Planet } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  planet: Planet;
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

    this.comments = this.storage.retrieve(this.route.snapshot['_routerState'].url);
    console.log(this.comments);

  });

  }

  saveValue() {
    this.storage.store(this.route.snapshot['_routerState'].url, this.comments);
    console.log(this.comments);
  }

  shareAPI() {
    this.ngNavigatorShareService.share({
      title: 'StarWars',
      text: 'Hey Check Out My App',
      url: 'https://kjiakai.github.io/StarWars-ghp' + this.route.snapshot['_routerState'].url
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

}

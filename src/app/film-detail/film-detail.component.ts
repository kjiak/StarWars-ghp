import { Component, OnInit } from '@angular/core';
import { Film } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: Film;
  private ngNavigatorShareService: NgNavigatorShareService;
  comments: string;

  constructor(
    private storage: LocalStorageService,
    ngNavigatorShareService: NgNavigatorShareService,
    private  apiService:  ApiService,
    private route: ActivatedRoute
  ) {
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getFilm(id).then(data => { this.film = data; console.log(this.film);

    if (this.film.species[0] !== 'unknown') {
      for (let i = 0; i < this.film.species.length; i++) {
      this.apiService.getSpeciesname(this.film.species[i]).then(res => {this.film.species[i] = res;
        console.log(this.film.species[i]); });
      }
    }

    if (this.film.starships[0] !== 'unknown') {
      for (let i = 0; i < this.film.starships.length; i++) {
      this.apiService.getStarshipsname(this.film.starships[i]).then(res => {this.film.starships[i] = res;
        console.log(this.film.starships[i]); });
      }
    }

    if (this.film.vehicles[0] !== 'unknown') {
      for (let i = 0; i < this.film.vehicles.length; i++) {
      this.apiService.getVehiclesname(this.film.vehicles[i]).then(res => {this.film.vehicles[i] = res;
        console.log(this.film.vehicles[i]); });
      }
    }

    if (this.film.planets[0] !== 'unknown') {
      for (let i = 0; i < this.film.planets.length; i++) {
      this.apiService.getPlanetname(this.film.planets[i]).then(res => {this.film.planets[i] = res;
        console.log(this.film.planets[i]); });
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
  }).then( (response) => {
    console.log(response);
  })
  .catch( (error) => {
    console.log(error);
  });
}

}

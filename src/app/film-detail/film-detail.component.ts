import { Component, OnInit } from '@angular/core';
import { Film } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: Film;

  constructor(
    private  apiService:  ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getFilm(id).then(data => { this.film = data; console.log(this.film);

    if (this.film.species[0] !== 'unknown') {
      for (let i = 0; i < this.film.species.length; i++) {
      this.apiService.getSpecies(this.film.species[i]).then(res => {this.film.species[i] = res;
        console.log(this.film.species[i]); });
      }
    }

    if (this.film.starships[0] !== 'unknown') {
      for (let i = 0; i < this.film.starships.length; i++) {
      this.apiService.getStarship(this.film.starships[i]).then(res => {this.film.starships[i] = res;
        console.log(this.film.starships[i]); });
      }
    }

    if (this.film.vehicles[0] !== 'unknown') {
      for (let i = 0; i < this.film.vehicles.length; i++) {
      this.apiService.getVehicle(this.film.vehicles[i]).then(res => {this.film.vehicles[i] = res;
        console.log(this.film.vehicles[i]); });
      }
    }

    if (this.film.planets[0] !== 'unknown') {
      for (let i = 0; i < this.film.planets.length; i++) {
      this.apiService.getPlanet(this.film.planets[i]).then(res => {this.film.planets[i] = res;
        console.log(this.film.planets[i]); });
      }
    }


  });

}
}

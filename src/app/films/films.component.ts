import { Component, OnInit } from '@angular/core';
import { Film } from '../classes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.apiService.getFilms().then(data => { this.films = data; console.log(this.films); });
  }

}

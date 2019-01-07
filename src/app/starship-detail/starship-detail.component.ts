import { Component, OnInit } from '@angular/core';
import { Starship } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starship: Starship;

  constructor(
    private  apiService:  ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getStarship(id).then(data => { this.starship = data; console.log(this.starship);

    if (this.starship.films[0] !== 'unknown') {
      for (let i = 0; i < this.starship.films.length; i++) {
      this.apiService.getFilmsname(this.starship.films[i]).then(res => {this.starship.films[i] = res;
        console.log(this.starship.films[i]); });
      }
    }

    if (this.starship.pilots[0] !== 'unknown') {
      for (let i = 0; i < this.starship.pilots.length; i++) {
      this.apiService.getCharactersname(this.starship.pilots[i]).then(res => {this.starship.pilots[i] = res;
        console.log(this.starship.pilots[i]); });
      }
    }

  });

  }

}

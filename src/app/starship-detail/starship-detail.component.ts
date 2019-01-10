import { Component, OnInit } from '@angular/core';
import { Starship } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starship: Starship;
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
          url: 'https://kjiakai.github.io/StarWars-ghp/' + this.route.snapshot['_routerState'].url
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    }
  }

}

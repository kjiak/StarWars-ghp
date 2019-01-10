import { Component, OnInit } from '@angular/core';
import { Species } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {

  species: Species;
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
    this.apiService.getSpecies(id).then(data => { this.species = data; console.log(this.species);

    if (this.species.homeworld !== 'unknown') {
      this.apiService.getPlanetname(this.species.homeworld).then(res => {this.species.homeworld = res;
        console.log(this.species.homeworld); });
      }

    if (this.species.films[0] !== 'unknown') {
      for (let i = 0; i < this.species.films.length; i++) {
      this.apiService.getSpeciesname(this.species.films[i]).then(res => {this.species.films[i] = res;
        console.log(this.species.films[i]); });
      }
    }

    if (this.species.people[0] !== 'unknown') {
      for (let i = 0; i < this.species.people.length; i++) {
      this.apiService.getCharactersname(this.species.people[i]).then(res => {this.species.people[i] = res;
        console.log(this.species.people[i]); });
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
          url: 'https://kjiakai.github.io/StarWars-ghp' + this.route.snapshot['_routerState'].url
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    }
  }


}

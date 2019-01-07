import { Component, OnInit } from '@angular/core';
import { Species } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {

  species: Species;
  private ngNavigatorShareService: NgNavigatorShareService;


  constructor(
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

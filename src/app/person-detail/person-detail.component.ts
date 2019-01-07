import { Component, OnInit } from '@angular/core';
import { Person } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  // inside the controller, you call the service(eg this.species = species[0])
  person: Person;
  private ngNavigatorShareService: NgNavigatorShareService;

  constructor(
    ngNavigatorShareService: NgNavigatorShareService,
    private  apiService:  ApiService,
    private route: ActivatedRoute
    ) {
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.apiService.getPerson(id).then(data => { this.person = data; console.log(this.person);

    if (this.person.homeworld !== 'unknown') {
    this.apiService.getPlanetname(this.person.homeworld).then(res => {this.person.homeworld = res;
      console.log(this.person.homeworld); });
    }
    if (this.person.species[0] !== 'unknown') {
    this.apiService.getSpeciesname(this.person.species[0]).then(res => {this.person.species[0] = res;
      console.log(this.person.species[0]); });
    }
    if (this.person.films[0] !== 'unknown') {
      for (let i = 0; i < this.person.films.length; i++) {
      this.apiService.getFilmsname(this.person.films[i]).then(res => {this.person.films[i] = res;
        console.log(this.person.films[i]); });
      }
    }
    if (this.person.vehicles[0] !== 'unknown') {
      for (let i = 0; i < this.person.vehicles.length; i++) {
      this.apiService.getVehiclesname(this.person.vehicles[i]).then(res => {this.person.vehicles[i] = res;
        console.log(this.person.vehicles[i]); });
      }
    }
    if (this.person.starships[0] !== 'unknown') {
      for (let i = 0; i < this.person.starships.length; i++) {
      this.apiService.getStarshipsname(this.person.starships[i]).then(res => {this.person.starships[i] = res;
        console.log(this.person.starships[i]); });
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

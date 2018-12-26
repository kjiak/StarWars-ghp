import { Component, OnInit, Input } from '@angular/core';
import { Person, Planet, Species } from '../classes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  // inside the controller, you call the service(eg this.species = species[0])
  title = 'StarWars';
  // persondetail: Person[];
  person: Person;
  homeworld: Planet;
  species: Species;

  constructor(private  apiService:  ApiService) {
  }

  ngOnInit() {
    // this.apiService.getPeople().then(data => this.persondetail = data);


    // solo if?
    this.apiService.getPerson(5).then(data => { this.person = data; console.log(this.person);
    this.apiService.getPlanetname(this.person.homeworld).then(res => {this.homeworld = res; console.log(this.homeworld); });
    this.apiService.getSpeciesname(this.person.species).then(res => {this.species = res; console.log(this.species); });
    });
  }

}

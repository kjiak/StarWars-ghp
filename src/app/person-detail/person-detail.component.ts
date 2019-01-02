import { Component, OnInit, Input } from '@angular/core';
import { Person, Planet, Species } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  // inside the controller, you call the service(eg this.species = species[0])
  title = 'StarWars';
  person: Person;

  constructor(
    private  apiService:  ApiService,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    // solo if?
    this.apiService.getPerson(id).then(data => { this.person = data; console.log(this.person);
    if (this.person.homeworld !== 'unknown') {
    this.apiService.getPlanetname(this.person.homeworld).then(res => {this.person.homeworld = res;
      console.log(this.person.homeworld); });
    }
    if (this.person.species[0] !== 'unknown') {
    this.apiService.getSpeciesname(this.person.species[0]).then(res => {this.person.species[0] = res;
      console.log(this.person.species[0]); });
    }
    });

  }
}

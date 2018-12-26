import { Component, OnInit } from '@angular/core';
import { Person } from '../classes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
     this.apiService.getPeople().then(data => this.people = data);
  }

}

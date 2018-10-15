import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Person } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StarWars';
  people: Person[];
  constructor(private  apiService:  ApiService) {
  }

ngOnInit() {
  this.apiService.fetch().subscribe(data => this.people = data);
}
}

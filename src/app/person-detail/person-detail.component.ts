import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../interface';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  title = 'StarWars';
  @Input() persondetail: Person[];

  constructor() { }

  ngOnInit() {
  }

}

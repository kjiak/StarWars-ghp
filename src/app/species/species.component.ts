import { Component, OnInit } from '@angular/core';
import { Species } from '../classes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  specieslist: Species[];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.apiService.getSpeciesList().then(data => { this.specieslist = data; console.log(this.specieslist); });
  }
}

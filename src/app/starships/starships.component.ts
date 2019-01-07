import { Component, OnInit } from '@angular/core';
import { Starship } from '../classes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: Starship[];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.apiService.getStarships().then(data => { this.starships = data; console.log(this.starships); });
  }

}

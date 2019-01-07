import { Component, OnInit } from '@angular/core';
import { Starship } from '../classes';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starship: Starship;
  private ngNavigatorShareService: NgNavigatorShareService;

  constructor(
    ngNavigatorShareService: NgNavigatorShareService,
    private  apiService:  ApiService,
    private route: ActivatedRoute
  ) { this.ngNavigatorShareService = ngNavigatorShareService; 
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getStarship(id).then(data => { this.starship = data; console.log(this.starship);

    if (this.starship.films[0] !== 'unknown') {
      for (let i = 0; i < this.starship.films.length; i++) {
      this.apiService.getFilmsname(this.starship.films[i]).then(res => {this.starship.films[i] = res;
        console.log(this.starship.films[i]); });
      }
    }

    if (this.starship.pilots[0] !== 'unknown') {
      for (let i = 0; i < this.starship.pilots.length; i++) {
      this.apiService.getCharactersname(this.starship.pilots[i]).then(res => {this.starship.pilots[i] = res;
        console.log(this.starship.pilots[i]); });
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

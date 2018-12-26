import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StarWars PWA';

  constructor(private location: Location) {}

  ngOnInit() {}

   goBack(): void {
    this.location.back();
  }
}

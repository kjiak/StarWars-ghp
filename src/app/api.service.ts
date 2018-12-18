import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Planet } from './person';

@Injectable({
  providedIn: 'root'
})

// this is the service where the magic happens
export class ApiService {
  private peopleURL = 'https://swapi.co/api/people/';
  private planetURL = 'https://swapi.co/api/planets/';
  constructor(private  httpClient:  HttpClient) {}

  getPeople(): any {
    const allpeople = [];
    for (let i = 1; i < 89; i++) {
    if (i === 17) { continue; }
    const p = this.httpClient.get(this.peopleURL + i + '/')
    .toPromise()
    .then(response => Person.parse(response))
    .catch(err => console.log(err));
    allpeople.push(p);
    }
    console.log(allpeople);
    return Promise.all(allpeople);
  }

  getPlanet(planetid): any {
    this.httpClient.get(this.planetURL + planetid + '/')
    .toPromise()
    .then(response => response['name'])
    .catch(err => console.log(err));
    }

}

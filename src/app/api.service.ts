import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})

// this is the service where the magic happens
export class ApiService {
  private peopleURL = 'https://swapi.co/api/people/';
  constructor(private  httpClient:  HttpClient) {}

  getPeople(): any {
    const all = [];
    for (let i = 1; i < 89; i++) {
    if (i === 17) { continue; }
    const p = <Promise<Person>>this.httpClient.get(this.peopleURL + i + '/')
    .toPromise()
    .then(response => Person.parse(response)).catch(err => console.log(err));
    all.push(p);
    }
    console.log(all);
    return Promise.all(all);
  }
}

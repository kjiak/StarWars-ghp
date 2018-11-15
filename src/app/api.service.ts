import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
// this is the service where the magic happens
export class ApiService {
  private peopleURL = 'https://swapi.co/api/people/?page=1';
  constructor(private  httpClient:  HttpClient) {}

  getPeople(): Promise<Person[]> {
    return <Promise<Person[]>>this.httpClient.get(this.peopleURL)
    .toPromise()
    .then(response => response['results'].map(result => Person.parse(result)));
  }
}

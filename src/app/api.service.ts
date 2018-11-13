import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private  peopleURL = 'https://swapi.co/api/people/';
  constructor(private  httpClient:  HttpClient) {}

  getPeople():  Observable<Person[]> {
  return <Observable<Person[]> >this.httpClient.get(this.peopleURL)
  .pipe(map(data => data['results']));
}

}

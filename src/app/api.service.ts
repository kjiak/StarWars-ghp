import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private  dataURL = 'https://swapi.co/api/people/';
  constructor(private  httpClient:  HttpClient) {}
  fetch():  Observable<Person[]> {
  return <Observable<Person[]> >this.httpClient.get(this.dataURL)
  .pipe(map(data => data['results']));
}
}

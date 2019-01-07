import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, Planet } from './classes';

@Injectable({
  providedIn: 'root'
})

// this is the service where the magic happens
export class ApiService {
  private peopleURL = 'https://swapi.co/api/people/';
  private planetURL = 'https://swapi.co/api/planets/';
  private speciesURL = 'https://swapi.co/api/species/';
  private filmsURL = 'https://swapi.co/api/films/';
  private vehiclesURL = 'https://swapi.co/api/vehicles/';
  private starshipsURL = 'https://swapi.co/api/starships/';

  constructor(private  httpClient:  HttpClient) {}

  // Characters

  // using promise all method to preserve calling order
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

  getPerson(personid): any {
    return this.httpClient.get(this.peopleURL + personid + '/')
    .toPromise()
    .then(response => Person.parse(response))
    .catch(err => console.log(err));
    }

  getPlanetname(planetid): any {
    return this.httpClient.get(this.planetURL + planetid + '/')
    .toPromise()
    .then(response => response['name'])
    .catch(err => console.log(err));
    }

  getSpeciesname(speciesid): any {
    return this.httpClient.get(this.speciesURL + speciesid + '/')
    .toPromise()
    .then(response => response['name'])
    .catch(err => console.log(err));
    }

  getFilmsname(filmsid): any {
    return this.httpClient.get(this.filmsURL + filmsid + '/')
    .toPromise()
    .then(response => response['title'])
    .catch(err => console.log(err));
    }

  getVehiclesname(vehiclesid): any {
    return this.httpClient.get(this.vehiclesURL + vehiclesid + '/')
    .toPromise()
    .then(response => response['name'])
    .catch(err => console.log(err));
    }

  getStarshipsname(starshipsid): any {
    return this.httpClient.get(this.starshipsURL + starshipsid + '/')
    .toPromise()
    .then(response => response['name'])
    .catch(err => console.log(err));
    }

    // Planets
    // using promise all method to preserve calling order
  getPlanets(): any {
    const allplanets = [];
    for (let i = 1; i < 62; i++) {
    const p = this.httpClient.get(this.planetURL + i + '/')
    .toPromise()
    .then(response => Planet.parse(response))
    .catch(err => console.log(err));
    allplanets.push(p);
    }
    console.log(allplanets);
    return Promise.all(allplanets);
  }

  getPlanet(planetid): any {
    return this.httpClient.get(this.planetURL + planetid + '/')
    .toPromise()
    .then(response => Planet.parse(response))
    .catch(err => console.log(err));
    }

  getCharactersname(personid): any {
      return this.httpClient.get(this.peopleURL + personid + '/')
      .toPromise()
      .then(response => response['name'])
      .catch(err => console.log(err));
      }

}

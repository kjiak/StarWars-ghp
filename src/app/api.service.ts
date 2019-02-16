import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, Planet, Film, Species, Vehicle, Starship } from './classes';

@Injectable({
  providedIn: 'root'
})

// this is the service where the magic happens
export class ApiService {
  private peopleURL = 'https://swapi.co/api/people/';
  private planetsURL = 'https://swapi.co/api/planets/';
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
    return this.httpClient.get(this.planetsURL + planetid + '/')
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
    const p = this.httpClient.get(this.planetsURL + i + '/')
    .toPromise()
    .then(response => Planet.parse(response))
    .catch(err => console.log(err));
    allplanets.push(p);
    }
    console.log(allplanets);
    return Promise.all(allplanets);
  }

  getPlanet(planetid): any {
    return this.httpClient.get(this.planetsURL + planetid + '/')
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

  // Films
  // using promise all method to preserve calling order
    getFilms(): any {
      const allfilms = [];
      for (let i = 1; i < 8; i++) {
      const p = this.httpClient.get(this.filmsURL + i + '/')
      .toPromise()
      .then(response => Film.parse(response))
      .catch(err => console.log(err));
      allfilms.push(p);
      }
      console.log(allfilms);
      return Promise.all(allfilms);
    }

    getFilm(filmid): any {
      return this.httpClient.get(this.filmsURL + filmid + '/')
      .toPromise()
      .then(response => Film.parse(response))
      .catch(err => console.log(err));
      }

  // Vehicles
  // using promise all method to preserve calling order
    getVehicles(): any {
      const allvehicles = [];
      for (let i = 4; i < 40; i++) {
      if (i === 5 || i === 15 || i === 17 || i === 9 || i === 10
        || i === 11 || i === 12 || i === 13 || i === 21 || i === 22 || i === 23
        || i === 27 || i === 28 || i === 29 || i === 31 || i === 32 || i === 39 ) { continue; }
      const p = this.httpClient.get(this.vehiclesURL + i + '/')
      .toPromise()
      .then(response => Vehicle.parse(response))
      .catch(err => console.log(err));
      allvehicles.push(p);
      }
      console.log(allvehicles);
      return Promise.all(allvehicles);
    }

    getVehicle(vehicleid): any {
      return this.httpClient.get(this.vehiclesURL + vehicleid + '/')
      .toPromise()
      .then(response => Vehicle.parse(response))
      .catch(err => console.log(err));
      }

    // Starships
    // using promise all method to preserve calling order
    getStarships(): any {
      const allstarships = [];
      for (let i = 2; i < 38; i++) {
      if (i === 4 || i === 6 || i === 7 || i === 8 || i === 14 ||
        i === 16 || i === 18 || i === 19 || i === 20 || i === 24 || i === 25 || i === 26 ||
       i === 30 || i === 33 || i === 34 || i === 35 || i === 36 || i === 37) { continue; }
      const p = this.httpClient.get(this.starshipsURL + i + '/')
      .toPromise()
      .then(response => Starship.parse(response))
      .catch(err => console.log(err));
      allstarships.push(p);
      }
      console.log(allstarships);
      return Promise.all(allstarships);
    }

    getStarship(starshipid): any {
      return this.httpClient.get(this.starshipsURL + starshipid + '/')
      .toPromise()
      .then(response => Starship.parse(response))
      .catch(err => console.log(err));
      }

    // Species
    // using promise all method to preserve calling order
    getSpeciesList(): any {
      const allspecies = [];
      for (let i = 1; i < 38; i++) {
      const p = this.httpClient.get(this.speciesURL + i + '/')
      .toPromise()
      .then(response => Species.parse(response))
      .catch(err => console.log(err));
      allspecies.push(p);
      }
      console.log(allspecies);
      return Promise.all(allspecies);
    }

    getSpecies(speciesid): any {
      return this.httpClient.get(this.speciesURL + speciesid + '/')
      .toPromise()
      .then(response => Species.parse(response))
      .catch(err => console.log(err));
      }

}

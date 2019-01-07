export class Person {
    name:  string;
    height:  string;
    mass:  string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
    imageURL: string;

    static parse(data) {
        const person = Object.assign(new Person(), data);
        person.getId();
        person.getImageUrl();
        person.getHomeWorldId();
        person.getSpeciesId();
        person.getFilmsId();
        person.getVehiclesId();
        person.getStarshipsId();
        return person;
      }

    getHomeWorldId() {
        if (this.homeworld) {
          const temp = this.homeworld.match('([0-9]+)\/$');
          // match from the back
          this.homeworld = temp[1];
        }
      }

    getSpeciesId() {
      if (!this.species.length) {
        // force empty array to show as 'unknown'
        this.species.push('unknown');
        } else {
        // array of string instead of string
        const temp = this.species.map(x => x.match('([0-9]+)\/$'));
        this.species = temp.map(x => x[1]);
      }
    }

    getStarshipsId() {
      if (!this.starships.length) {
        // force empty array to show as 'unknown'
        this.starships.push('unknown');
      } else {
        // array of string instead of string
        const temp = this.starships.map(x => x.match('([0-9]+)\/$'));
        this.starships = temp.map(x => x[1]);
      }
    }

    getVehiclesId() {
      if (!this.vehicles.length) {
        // force empty array to show as 'unknown'
        this.vehicles.push('unknown');
      } else {
        // array of string instead of string
        const temp = this.vehicles.map(x => x.match('([0-9]+)\/$'));
        this.vehicles = temp.map(x => x[1]);
      }
    }

    getFilmsId() {
      if (!this.films.length) {
        // force empty array to show as 'unknown'
        this.films.push('unknown');
      } else {
        // array of string instead of string
        const temp = this.films.map(x => x.match('([0-9]+)\/$'));
        this.films = temp.map(x => x[1]);
      }
    }

    getId() {
        if (this.url) {
          const temp = this.url.match('([0-9]+)\/$');
          this.url = temp[1];
        }
      }

    getImageUrl() {
      this.imageURL = 'https://starwars-visualguide.com/assets/img/characters/' + this.url + '.jpg';
    }
}

export class Planet {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    url: string;
    created: string;
    edited: string;
    imageURL: string;

    static parse(data) {
        const planet = Object.assign(new Planet(), data);
        planet.getId();
        planet.getImageUrl();
        planet.getResidentsId();
        planet.getFilmsId();
        return planet;
      }

    getResidentsId() {
      if (!this.residents.length) {
        // force empty array to show as 'unknown'
        this.residents.push('unknown');
      } else {
        // array of string instead of string
        const temp = this.residents.map(x => x.match('([0-9]+)\/$'));
        this.residents = temp.map(x => x[1]);
      }
    }

    getFilmsId() {
      if (!this.films.length) {
        // force empty array to show as 'unknown'
        this.films.push('unknown');
      } else {
        // array of string instead of string
        const temp = this.films.map(x => x.match('([0-9]+)\/$'));
        this.films = temp.map(x => x[1]);
      }
    }

    getId() {
        if (this.url) {
          const temp = this.url.match('([0-9]+)\/$');
          this.url = temp[1];
        }
      }

    getImageUrl() {
      this.imageURL = 'https://starwars-visualguide.com/assets/img/planets/' + this.url + '.jpg';
    }
}

export class Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
  imageURL: string;

  static parse(data) {
    const film = Object.assign(new Film(), data);
    film.getId();
    film.getImageUrl();
    film.getCharactersId();
    film.getPlanetsId();
    film.getStarshipsId();
    film.getVehiclesId();
    film.getSpeciesId();
    return film;
  }

  getCharactersId() {
    if (!this.characters.length) {
      // force empty array to show as 'unknown'
      this.characters.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.characters.map(x => x.match('([0-9]+)\/$'));
      this.characters = temp.map(x => x[1]);
    }
  }

  getPlanetsId() {
    if (!this.planets.length) {
      // force empty array to show as 'unknown'
      this.planets.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.planets.map(x => x.match('([0-9]+)\/$'));
      this.planets = temp.map(x => x[1]);
    }
  }

  getStarshipsId() {
    if (!this.starships.length) {
      // force empty array to show as 'unknown'
      this.starships.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.starships.map(x => x.match('([0-9]+)\/$'));
      this.starships = temp.map(x => x[1]);
    }
  }

  getVehiclesId() {
    if (!this.vehicles.length) {
      // force empty array to show as 'unknown'
      this.vehicles.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.vehicles.map(x => x.match('([0-9]+)\/$'));
      this.vehicles = temp.map(x => x[1]);
    }
  }

  getSpeciesId() {
    if (!this.species.length) {
      // force empty array to show as 'unknown'
      this.species.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.species.map(x => x.match('([0-9]+)\/$'));
      this.species = temp.map(x => x[1]);
    }
  }

  getId() {
    if (this.url) {
      const temp = this.url.match('([0-9]+)\/$');
      this.url = temp[1];
    }
  }

  getImageUrl() {
    this.imageURL = 'https://starwars-visualguide.com/assets/img/films/' + this.url + '.jpg';
  }
}

export class Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
  imageURL: string;

  static parse(data) {
    const species = Object.assign(new Species(), data);
    species.getId();
    species.getImageUrl();
    species.getPeopleId();
    species.getFilmsId();
    return species;
  }

  getPeopleId() {
    if (!this.people.length) {
      // force empty array to show as 'unknown'
      this.people.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.people.map(x => x.match('([0-9]+)\/$'));
      this.people = temp.map(x => x[1]);
    }
  }

  getFilmsId() {
    if (!this.films.length) {
      // force empty array to show as 'unknown'
      this.films.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.films.map(x => x.match('([0-9]+)\/$'));
      this.films = temp.map(x => x[1]);
    }
  }

  getId() {
    if (this.url) {
      const temp = this.url.match('([0-9]+)\/$');
      this.url = temp[1];
    }
  }

  getImageUrl() {
    this.imageURL = 'https://starwars-visualguide.com/assets/img/species/' + this.url + '.jpg';
  }
}

export class Starship {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  pilots: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
  imageURL: string;

  static parse(data) {
    const starship = Object.assign(new Starship(), data);
    starship.getId();
    starship.getImageUrl();
    starship.getPilotsId();
    starship.getFilmsId();
    return starship;
  }

  getPilotsId() {
    if (!this.pilots.length) {
      // force empty array to show as 'unknown'
      this.pilots.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.pilots.map(x => x.match('([0-9]+)\/$'));
      this.pilots = temp.map(x => x[1]);
    }
  }

  getFilmsId() {
    if (!this.films.length) {
      // force empty array to show as 'unknown'
      this.films.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.films.map(x => x.match('([0-9]+)\/$'));
      this.films = temp.map(x => x[1]);
    }
  }

  getId() {
    if (this.url) {
      const temp = this.url.match('([0-9]+)\/$');
      this.url = temp[1];
    }
  }

  getImageUrl() {
    this.imageURL = 'https://starwars-visualguide.com/assets/img/starships/' + this.url + '.jpg';
  }
}

export class Vehicle {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmospheric_speed: string;
  cargo_capacity: string;
  consumable: string;
  pilots: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
  imageURL: string;

  static parse(data) {
    const vehicle = Object.assign(new Vehicle(), data);
    vehicle.getId();
    vehicle.getImageUrl();
    vehicle.getPilotsId();
    vehicle.getFilmsId();
    return vehicle;
  }

  getPilotsId() {
    if (!this.pilots.length) {
      // force empty array to show as 'unknown'
      this.pilots.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.pilots.map(x => x.match('([0-9]+)\/$'));
      this.pilots = temp.map(x => x[1]);
    }
  }

  getFilmsId() {
    if (!this.films.length) {
      // force empty array to show as 'unknown'
      this.films.push('unknown');
    } else {
      // array of string instead of string
      const temp = this.films.map(x => x.match('([0-9]+)\/$'));
      this.films = temp.map(x => x[1]);
    }
  }

  getId() {
    if (this.url) {
      const temp = this.url.match('([0-9]+)\/$');
      this.url = temp[1];
    }
  }

  getImageUrl() {
    this.imageURL = 'https://starwars-visualguide.com/assets/img/vehicles/' + this.url + '.jpg';
  }
}


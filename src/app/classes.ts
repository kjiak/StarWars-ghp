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
        const person = Object.assign(new Person(), data);
        person.getId();
        person.getImageUrl();
        person.getResidents();
        return person;
      }

    getResidents() {

      if (!this.residents.length) {
        // force empty array to show as 'unknown'
        this.residents.push('unknown');
      } else {
        // array of string instead of string
        const temp = this.residents.map(x => x.match('([0-9]+)\/$'));
        this.residents = temp.map(x => x[1]);
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
}


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
          this.homeworld = temp[1];
        }
      }

      getSpeciesId() {
        if (this.species) {
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
    name:  string;
}


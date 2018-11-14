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

    static parse(data) {
        const person = Object.assign(new Person(), data);
        person.getId();
        return person;
      }

    // getHomeWorldId() {
    //     if (this.homeworld) {
    //       const r = this.homeworld.match('([0-9]+)\/$');
    //       this.homeworld = r[0];
    //     }
    //   }

    getId() {
        if (this.url) {
          const temp = this.url.match('([0-9]+)\/$');
          this.url = temp[1];
        }
      }

    //   getImageUrl() {
    //     this.imageURL = "https://starwars-visualguide.com/assets/img/characters/" + this.id + ".jpg";
    //   }
}

export class Planet {
    name:  string;
}


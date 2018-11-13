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

    // static parse(data) {
    //     const person = Object.assign(new Person(), data);
    //     person.getHomeWorldId();
    //     return person;
    //   }

    // getHomeWorldId() {
    //     if (this.homeworld) {
    //       const r = this.homeworld.match('([0-9]+)\/$');
    //       this.homeworld = r[0];
    //     }
    //   }

    //   getImageUrl() {
    //     this.imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png";
    //   }
}

export class Planet {
    name:  string;
}


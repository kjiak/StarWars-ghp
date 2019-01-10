import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PeopleComponent } from './people/people.component';
import { CategoryComponent } from './category/category.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  {path: '**', redirectTo: '/category'},
  { path: 'category', component: CategoryComponent },
  { path: 'characters', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'characters/:id', component: PersonDetailComponent },
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: 'vehicles/:id', component: VehicleDetailComponent },
  { path: 'species/:id', component: SpeciesDetailComponent },
  { path: 'starships/:id', component: StarshipDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

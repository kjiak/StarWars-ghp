import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PeopleComponent } from './people/people.component';
import { CategoryComponent } from './category/category.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'characters', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'characters/:id', component: PersonDetailComponent },
  { path: 'planets/:id', component: PlanetDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

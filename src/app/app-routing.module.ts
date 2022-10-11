import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './modules/Home/Home.component';
import { TeamsComponent } from './modules/Teams/Teams.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },   
  {
    path: 'teams', component: TeamsComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

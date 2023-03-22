import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './modules/Home/Home.component';
import { TeamsComponent } from './modules/Teams/Teams.component';
import { CountryComponent } from './modules/Country/Country.component';
import { BetsComponent } from './modules/Bets/Bets.component';
import { CompetitionsComponent } from './modules/Competitions/Competitions.component';
import { MarketComponent } from './modules/Market/Market.component';
import { BetsAddEditComponent } from './modules/Bets/BetsAddEdit/BetsAddEdit.component';
import { LiveBetsComponent } from './modules/LiveBets/LiveBets.component';
import { LiveBetsAddEditComponent } from './modules/LiveBets/LiveBetsAddEdit/LiveBetsAddEdit.component';

//TESTE
import { TesteComponent } from './modules/Teste/Teste.component';
import { TeamsInfoComponent } from './modules/Teams/TeamsInfo/TeamsInfo.component';
import { MarketInfoComponent } from './modules/Market/MarketInfo/MarketInfo.component';



const routes: Routes = [
  {
    path: 'teste', component: TesteComponent
  }, 
  {
    path: 'home', component: HomeComponent
  },   
  {
    path: 'teams', component: TeamsComponent
  }, 
  {
    path: 'country', component: CountryComponent
  }, 
  {
    path: 'bets', component: BetsComponent
  }, 
  {
    path: 'competitions', component: CompetitionsComponent
  }, 
  {
    path: 'market', component: MarketComponent
  }, 
  {
    path: 'betsAddEdit', component: BetsAddEditComponent
  }, 
  {
    path: 'liveBets', component: LiveBetsComponent
  }, 
  {
    path: 'liveBetsAddEdit', component: LiveBetsAddEditComponent
  }, 
  {
    path: 'teamsInfo', component: TeamsInfoComponent
  }, 
  {
    path: 'marketInfo', component: MarketInfoComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

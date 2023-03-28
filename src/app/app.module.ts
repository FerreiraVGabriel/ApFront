import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
//PO-UI
import { PoTableModule } from '@po-ui/ng-components';
import { PoNavbarModule } from '@po-ui/ng-components';
import { PoDropdownModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { PoFieldModule, PoModule } from '@po-ui/ng-components';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';

//Components
import { HomeComponent } from './modules/Home/Home.component';
import { TeamsComponent } from './modules/Teams/Teams.component';
import { CountryComponent } from './modules/Country/Country.component';
import { BetsComponent } from './modules/Bets/Bets.component';
import { MarketComponent } from './modules/Market/Market.component';
import { CompetitionsComponent } from './modules/Competitions/Competitions.component';
import { BetsAddEditComponent } from './modules/Bets/BetsAddEdit/BetsAddEdit.component';
import { LiveBetsComponent } from './modules/LiveBets/LiveBets.component';
import { LiveBetsAddEditComponent } from './modules/LiveBets/LiveBetsAddEdit/LiveBetsAddEdit.component';
import { TeamsInfoComponent } from './modules/Teams/TeamsInfo/TeamsInfo.component';
import { MarketInfoComponent } from './modules/Market/MarketInfo/MarketInfo.component';

//Components-Shared
import { ManagementTableComponent } from './shared/components/management-table/management-table.component';
import { NavBarItensComponent } from './shared/components/navbar/navbar-itens/navbar-itens.component';

//Module
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//TESTE
import { TesteComponent } from './modules/Teste/Teste.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    ManagementTableComponent,
    NavBarItensComponent,
    CountryComponent,
    BetsComponent,
    MarketComponent,
    CompetitionsComponent,
    BetsAddEditComponent,
    LiveBetsComponent,
    LiveBetsAddEditComponent,
    TesteComponent,
    TeamsInfoComponent,
    MarketInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTableModule,
    PoNavbarModule,
    NoopAnimationsModule,
    MatInputModule,
    PoDropdownModule,
    PoModalModule,
    PoFieldModule,
    FormsModule,
    ReactiveFormsModule,
    PoPageDynamicTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

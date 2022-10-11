import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
//PO-UI
import { PoTableModule } from '@po-ui/ng-components';
import { PoNavbarModule } from '@po-ui/ng-components';
import { PoDropdownModule } from '@po-ui/ng-components';

//Components
import { HomeComponent } from './modules/Home/Home.component';
import { TeamsComponent } from './modules/Teams/Teams.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ManagementTableComponent } from './shared/components/management-table/management-table.component';
import { NavBarItensComponent } from './shared/components/navbar/navbar-itens/navbar-itens.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    ManagementTableComponent,
    NavBarItensComponent
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
    PoDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

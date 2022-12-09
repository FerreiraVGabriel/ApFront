import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router:Router){}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.homePage.bind(this) },
    { label: 'Pais', action: this.countryPage.bind(this) },
    { label: 'Times', action: this.teamsPage.bind(this) },
    { label: 'Apostas', action: this.betsPage.bind(this) },
    { label: 'Mercado', action: this.marketPage.bind(this) },
    { label: 'Competições', action: this.competitionsPage.bind(this) },
    { label: 'ApostasLive', action: this.liveBetsPage.bind(this) },
    { label: 'TESTE', action: this.testePage.bind(this) },
    { label: 'GABRIEL1' }
  ];

  private countryPage() {
    this.router.navigate(['country']);
  }

  private teamsPage() {
    this.router.navigate(['teams']);
  }

  private homePage() {
    this.router.navigate(['home']);
  }

  private betsPage() {
    this.router.navigate(['bets']);
  }

  private marketPage() {
    this.router.navigate(['market']);
  }

  private competitionsPage() {
    this.router.navigate(['competitions']);
  }

  private liveBetsPage() {
    this.router.navigate(['liveBets']);
  }

  private testePage() {
    this.router.navigate(['teste']);
  }

}

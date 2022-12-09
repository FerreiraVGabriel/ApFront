import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LiveBets } from 'src/app/models/liveBets.model';
import { Market } from 'src/app/models/market.model';
import { LiveBetsService } from 'src/app/shared/services/liveBets.service';
import { MarketService } from 'src/app/shared/services/market.service';


@Component({
  selector: 'liveBets',
  templateUrl: './LiveBets.component.html',
  styleUrls: ['./LiveBets.component.css']
})

export class LiveBetsComponent implements OnInit{  
  

    public constructor(public router:Router, private marketService:MarketService,
                      private liveBetService: LiveBetsService){}

    //Form ID
    marketId: number = null;

    //LISTAS
    markets: Market[];
    gameTime: GameTime[];
    liveBets: LiveBets[];
    arrayLiveBetsWithTime: LiveBetsWhithTime[] = [];

    columns = [
      { property: 'dataAposta', label: 'Data', type: 'date' },
      { property: 'competicao_id', label: 'competição' },
      { property: 'mandante_id', label: 'mandante' },
      { property: 'visitante_id', label: 'visitante' },
      { property: 'tempo', label: 'tempo' },
      { property: 'mercados_id', label: 'mercados' },
      { property: 'stake', label: 'stake' },
      { property: 'pl', label: 'pl' },
      { property: 'roiStake', label: 'roiStake' },
      { property: 'mH1Casa', label: 'mh1Casa' },
      { property: 'mH1Visitante', label: 'mh1Visitante' },
      { property: 'mH2Casa', label: 'mh2Casa' },
      { property: 'mH2Visitante', label: 'mh2Visitante' },
      { property: 'mH3Casa', label: 'mh3Casa' },
      { property: 'mH3Visitante', label: 'mh3Visitante' },
      { property: 'exgCasa', label: 'exgCasa' },
      { property: 'exgVisitante', label: 'exgVisitante' },     
      { property: 'apM1Casa', label: 'apm1Casa' },
      { property: 'apM1Visitante', label: 'apm1Visitante' },
      { property: 'apM2Casa', label: 'apm2Casa' },
      { property: 'apM2Visitante', label: 'apm2Visitante' },
      { property: 'caCasa', label: 'caCasa' },
      { property: 'caVisitante', label: 'caVisitante' },
      { property: 'cfaCasa', label: 'cfaCasa' },
      { property: 'cfaVisitante', label: 'cfaVisitante' },
      { property: 'posseBolaCasa', label: 'posseBolaCasa' },
      { property: 'posseBolaVisitante', label: 'posseBolaVisitante' },
      { property: 'ataquesCasa', label: 'ataquesCasa' },
      { property: 'ataquesVisitante', label: 'ataquesVisitante' },
      { property: 'ataqPerigososCasa', label: 'ataqPerigososCasa' },
      { property: 'ataqPerigososVisitante', label: 'ataqPerigososVisitante' },

      { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
    ];

    ngOnInit(): void {
        this.LoadMarket();
        this.LoadLiveBets();
    }

    changePageBetsLiveAddEdit(){
      this.router.navigate(['liveBetsAddEdit']);
    }

    async LoadMarket(): Promise<void> 
    {
      await this.marketService.readMarket().subscribe((market: Market[]) => {
        this.markets = market;
      });
    }
    async LoadLiveBets(): Promise<void> 
    {
      await this.liveBetService.readLiveBets().subscribe((liveBets: LiveBets[]) => {
        this.liveBets = liveBets;
      });
    }

    LoadTime(): void
    {
      this.gameTime = [
        { title: "Tempo de 0 a 5", time: "0|5" },
        { title: "Tempo de 6 a 10", time: "6|10" },
        { title: "Tempo de 11 a 15", time: "11|15" },
        { title: "Tempo de 16 a 20", time: "16|20" },
        { title: "Tempo de 25 a 30", time: "25|30" },
        { title: "Tempo de 31 a 35", time: "31|35" },
        { title: "Tempo de 36 a 40", time: "36|40" },
        { title: "Tempo de 41 a 45", time: "41|45" },
        { title: "Segundo tempo", time: "46" }
      ];
    }

    getLiveBetsByMarket(event, marketId)
    {
      this.arrayLiveBetsWithTime =[];
      this.LoadTime();
      let liveBetsByMarket:LiveBets[] = this.liveBets.filter(x=>x.mercados_id == marketId);
      this.gameTime.forEach(itemGameTime =>{
        var gameTimePeriod = itemGameTime.time.split("|",2);
        if(gameTimePeriod.length > 1){
          let liveBetsWithTime: LiveBetsWhithTime = new LiveBetsWhithTime();
          liveBetsWithTime.title = itemGameTime.title;
          liveBetsWithTime.liveBets = liveBetsByMarket.filter(x=>x.tempo >= parseInt(gameTimePeriod[0]) && x.tempo <= parseInt(gameTimePeriod[1]));
          this.statisticalCalculation(liveBetsWithTime.liveBets)
          this.arrayLiveBetsWithTime.push(liveBetsWithTime);
        }
        else{
          let liveBetsWithTime: LiveBetsWhithTime = new LiveBetsWhithTime();
          liveBetsWithTime.title = itemGameTime.title;
          liveBetsWithTime.liveBets = liveBetsByMarket.filter(x=>x.tempo >= parseInt(gameTimePeriod[0]));
          this.arrayLiveBetsWithTime.push(liveBetsWithTime);
        }
      })

    }

    
  statisticalCalculation(liveBets: LiveBets[]){
    liveBets.forEach(itemLibeBets =>{
      
    })
    this.statisticalCalculationMH1(liveBets.)
  }

  statisticalCalculationMH1(HigherValuesMh1:number[], lowerValuesMh1:number[], differenceValuesMh1:number[]){

  }

  mediaCalculation(numbers: number[]): number{
    let totalSumnumbers = numbers.reduce((val1,val2)=>val1 + val2,0);
    let x =totalSumnumbers/numbers.length;
    return x;
  }

  modeCalcution(numbers: number[]): number{
    const m = numbers.reduce((items, current) => {
      const item = (items.length === 0) ? null : items.find((x) => x.value === current);
      (item) ? item.occurrence++ : items.push({ value: current, occurrence: 1 });
      return items;
    }, [])
    .sort((a, b) => {
      if (a.occurrence < b.occurrence) {
          return 1;
      } else if (a.occurrence > b.occurrence || a.value < b.value) {
            return -1;
      } else {
          return (a.value === b.value) ? 0 : 1;
      }
  });

  return m[0].value;
  }

  medianCalculation(numbers: number[]): number{
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
  }

}

export class LiveBetsWhithTime{
  title: string;
  liveBets: LiveBets[];

  mediaHighNumbers: number;
  medianHighNumbers: number;
  modeHighNumbers: number;
  mediaLowerNumbers: number;
  medianLowerNumbers: number;
  modeLowerNumbers: number;
  mediaDifferenceNumbers: number;
  medianDifferenceNumbers: number;
  modeDifferenceNumbers: number;
}

export class GameTime{
  title: string;
  time: string;
}
import { Component, OnInit, ViewChild } from "@angular/core";
import { PoModalComponent } from "@po-ui/ng-components";
import { Information } from "src/app/models/information.model";
import { InformationService } from "src/app/shared/services/information.service";


@Component({
  selector: 'information',
  templateUrl: './Information.component.html',
  styleUrls: ['./Information.component.css']
})

export class InformationComponent implements OnInit{
  
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  public constructor(private informationervice:InformationService){}
  
    ngOnInit(): void {
    this.LoadInformation();
    }

    columns = [
      { property: 'id', label: 'ID' },
      { property: 'mes', label: 'mes' },
      { property: 'ano', label: 'ano' },
      { property: 'inicio', label: 'inicio' },
      { property: 'pl', label: 'pl' },
      { property: 'final', label: 'final' },
      { property: 'roi', label: 'roi' },
      { property: 'saque', label: 'saque' },
      { property: 'aporte', label: 'aporte' }
    ];

    information: Information[];
    async LoadInformation(): Promise<void> 
    {
    await this.informationervice.readInformation().subscribe((information: Information[]) => {
      this.information = information;
    });
  }
}
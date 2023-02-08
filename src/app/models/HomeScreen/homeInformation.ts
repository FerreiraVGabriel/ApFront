import { Bet } from "../bets.model";
import { Information } from "./information";
import { RoyByDays } from "./royByDays.model";

export class HomeInformation {
    informacoes: Information; 
    listApostas: Bet[];
    listRoiByDays : RoyByDays[];
}
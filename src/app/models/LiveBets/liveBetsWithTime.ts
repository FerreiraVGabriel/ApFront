import { LiveBets } from "./liveBets.model";
import { LiveBetsStatistics } from "./liveBetsStatistics";

export class LiveBetsWithTime {
    title: string; 
    liveBets: LiveBets[];
    liveBetsStatistics : LiveBetsStatistics[];
}
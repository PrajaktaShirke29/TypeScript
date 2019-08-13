import { MatchData } from "./MatchData";
import { WinAnalyzer } from "./Analyzers/WinAnalyzer";
import { HtmlReport } from "./reportTargets/HtmlReports";
export interface Analyzer{
    run(matches:MatchData[]): string;
}

export interface OutputTarget{
    print(resport:string):void;
}

export class Summary{
    static winsAnalysisWithHtmlReport(team: string){
        return new Summary(
            new WinAnalyzer(team),
            new HtmlReport()
        )
    }
    constructor(
        public analyzer: Analyzer,
        public outputTarget : OutputTarget){}

    buildAndPrintReport(matches: MatchData[]): void{
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}

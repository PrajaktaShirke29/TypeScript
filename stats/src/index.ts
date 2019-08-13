import { MatchReaders } from './MatchReaders';
import { Summary } from "./Summary";
// const reader = new MatchReader('football.csv');

// reader.read();

//Json
// const MatchResult ={
//     homeWin : 'H',
//     awayWin : 'A',
//     draw : 'D'
// };


// // 1. create an object that satisfies the 'DataReader' interface
// const csvFileReaders = new CsvFileReaders('football.csv');

// // 2. create an instance of MatchReaders and pass in something satisfying the 'DataReader' interface
// const matchReaders =new MatchReaders(csvFileReaders)

const matchReaders =MatchReaders.fromCsv('football.csv');

matchReaders.load();

console.log(matchReaders.matches[0]);

matchReaders.load();
// const summay= new Summary(
//     new WinAnalyzer('Man United'),
//     // new ConsoleReport(),
//     new HtmlReport()
// );

const summay= Summary.winsAnalysisWithHtmlReport('Man United');

summay.buildAndPrintReport(matchReaders.matches);
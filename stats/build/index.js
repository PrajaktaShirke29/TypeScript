"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReaders_1 = require("./MatchReaders");
var Summary_1 = require("./Summary");
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
var matchReaders = MatchReaders_1.MatchReaders.fromCsv('football.csv');
matchReaders.load();
console.log(matchReaders.matches[0]);
matchReaders.load();
// const summay= new Summary(
//     new WinAnalyzer('Man United'),
//     // new ConsoleReport(),
//     new HtmlReport()
// );
var summay = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summay.buildAndPrintReport(matchReaders.matches);

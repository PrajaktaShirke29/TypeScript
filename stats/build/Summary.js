"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinAnalyzer_1 = require("./Analyzers/WinAnalyzer");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinAnalyzer_1.WinAnalyzer(team), new HtmlReports_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;

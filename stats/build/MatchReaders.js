"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CsvFileReaders_1 = require("./CsvFileReaders");
var MatchReaders = /** @class */ (function () {
    function MatchReaders(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReaders.fromCsv = function (fileName) {
        return new MatchReaders(new CsvFileReaders_1.CsvFileReaders(fileName));
    };
    MatchReaders.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1], row[2],
                parseInt(row[3]), parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return MatchReaders;
}());
exports.MatchReaders = MatchReaders;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReaders = /** @class */ (function () {
    function CsvFileReaders(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReaders.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        });
    };
    return CsvFileReaders;
}());
exports.CsvFileReaders = CsvFileReaders;

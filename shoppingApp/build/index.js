"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
var path_1 = __importDefault(require("path"));
require("./view/login");
require("./view/register");
require("./view/root");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['session'] }));
app.use(AppRouter_1.AppRouter.getInstance());
// app.use(express.static(__dirname + 'public'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
try {
    app.listen(4000, function () {
        console.log('Listing on port 4000');
    });
}
catch (err) {
    console.log(err);
}

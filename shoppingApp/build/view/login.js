"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../controller/Decorator");
function logger(req, res, next) {
    console.log('Request was made!!');
    next();
}
var LoginContoller = /** @class */ (function () {
    function LoginContoller() {
    }
    LoginContoller.prototype.getLogin = function (req, res) {
        res.send("<div>\n        <form method=\"POST\">\n            <div>\n                <label>Email</label>\n                <input name = \"email\"/>\n            </div>\n            <div>\n                <label> Password</label>\n                <input name = \"password\" type=\"password\"/>\n            </div>\n            <button> Login</button>\n        </form></div>\n        ");
    };
    ;
    LoginContoller.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email && password && email === 'hi@hi.com' && password === 'password') {
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send('Invalid username password');
        }
    };
    LoginContoller.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        Decorator_1.get('/login'),
        Decorator_1.use(logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginContoller.prototype, "getLogin", null);
    __decorate([
        Decorator_1.post('/login'),
        Decorator_1.bodyValidator('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginContoller.prototype, "postLogin", null);
    __decorate([
        Decorator_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginContoller.prototype, "getLogout", null);
    LoginContoller = __decorate([
        Decorator_1.controller('/auth')
    ], LoginContoller);
    return LoginContoller;
}());

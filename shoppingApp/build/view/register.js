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
var RegisterController = /** @class */ (function () {
    function RegisterController() {
    }
    RegisterController.prototype.getRegister = function (req, res) {
        res.send("\n        <div>\n            <form method=\"POST\">\n                <h1 style=\"color:blue;margin-left:30px;\"> Coustomer Details</h1>\n                <div>\n                    <label>Name</label>\n                    <input name= \"cName\">   \n                </div>\n                <div>\n                    <label>Phone Number</label>\n                    <input name= \"cNumber\">\n                </div>\n                <div>\n                    <label>Email</label>\n                    <input name= \"cEmail\">\n                </div>\n                <div>\n                    <label>Password</label>\n                    <input name= \"cPassword\">\n                </div>\n                <div>\n                    <button class=\"\"> Register </button>\n                </div>\n        </div>\n        ");
    };
    ;
    RegisterController.prototype.postRegister = function (req, res) {
        var _a = req.body, cName = _a.cName, cNumber = _a.cNumber, cEmail = _a.cEmail, cPassword = _a.cPassword;
        if (cName && cNumber && cEmail && cPassword) {
            req.session = req.body;
            res.redirect('/dashboard');
        }
        else {
            res.send('All Fields are required');
        }
    };
    __decorate([
        Decorator_1.get('/register'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RegisterController.prototype, "getRegister", null);
    __decorate([
        Decorator_1.post('/register'),
        Decorator_1.bodyValidator('cName', 'cNumber', 'cEmail', 'cPassword'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RegisterController.prototype, "postRegister", null);
    RegisterController = __decorate([
        Decorator_1.controller('')
    ], RegisterController);
    return RegisterController;
}());

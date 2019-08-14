"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n        <div>\n            <label>Email</label>\n            <input name = \"email\"/>\n        </div>\n        <div>\n            <label> Passowrd</label>\n            <input name = \"password\" type=\"password\"/>\n        </div>\n        <button> Submit</button>\n    </form>\n    ");
});
router.post('/login', function (req, res) {
    var email = req.body;
    console.log(req.body);
    res.send('Hi');
});

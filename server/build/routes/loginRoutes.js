"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
var router = express_1.Router();
exports.router = router;
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid username password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n        <div>\n            <div>You are logged in</div>\n            <a href=\"/logout\">Logout</a>\n        </div>");
    }
    else {
        res.send("\n        <div>\n            <div>You are not logged in</div>\n            <a href=\"/logout\">Login</a>\n        </div>");
    }
});
router.get('/protected', function (req, res) {
    res.send('Welcome to Protected route, logged in user');
});

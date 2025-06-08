"use strict";
exports.__esModule = true;
exports.Button = void 0;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.get('/', function (_req, res) {
    res.send('Hello from TS!');
});
app.listen(port, function () {
    console.log("Server running at http://localhost:" + port);
});
exports.Button = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    return onClick = { onClick: onClick } > { text: text } < /button>;
};
;

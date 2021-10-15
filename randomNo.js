"use strict";
exports.__esModule = true;
exports.generate = void 0;
var generate = function () {
    var code = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (var i = 0; i <= 6; i++)
        code += str.charAt(Math.floor(Math.random() * str.length));
    return code;
};
exports.generate = generate;

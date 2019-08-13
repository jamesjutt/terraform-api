"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express = require("express");
var router_1 = __importDefault(require("./router"));
var app = express();
var port = +(process.env.PORT || 3000);
app.use(router_1.default);
var isInLambda = !!process.env.LAMBDA_TASK_ROOT;
if (!isInLambda) {
    app.listen(port, function () {
        console.log("Listening on port " + port);
    });
}
module.exports = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hello_1 = __importDefault(require("./routes/hello"));
var router = express_1.Router();
router.use('/hello', hello_1.default);
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
let myValidator = new main_1.default.ls;
myValidator.ListDirectory("D:/Backups/Backup_keys/key", function (data, err) {
    console.log(data);
});

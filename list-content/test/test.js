"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
let newLs = new main_1.default.ls;
newLs.ListDirectory("D:/list_content_v2/", function (data, err) {
    for (const item of data) {
        if (item.files.length > 0) {
            for (const iterator of item.files) {
                console.log(item.folder, "->", iterator);
            }
        }
        else {
            console.log(item.folder, "->", "EMPTY_FOLDER"); // Empty folder
        }
    }
});
/*
-------------OUTPUT-------------
    .  -> test.js
    .  -> test.ts
    .\dev -> main.d.ts
    .\dev -> main.js
    .\dev -> package.json
    .\dev -> README.md
    .\dev\src  -> directory.d.ts
    .\dev\src  -> directory.js
    .\dev\test -> test.d.ts
    .\dev\test -> test.js
    .\dev\dist -> EMPTY_FOLDER
---------------------------------
*/ 

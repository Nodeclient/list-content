"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ls = void 0;
const fs = require("fs");
const path = require("path");
const util_1 = require("util");
let ORIGIN_LS = "";
let R_DB = [];
let G_DB = [];
let ISRUN = true;
var ISDONE = false;
const CH_DIR = (S_DIR) => {
    if (util_1.promisify(fs.existsSync)(S_DIR)) {
        return true;
    }
    else {
        return false;
    }
};
const LS_DIR = (S_DIR) => {
    (ORIGIN_LS.length == 0) ? ORIGIN_LS = S_DIR : false;
    const S_STATUS = CH_DIR(S_DIR);
    const S_SEARCH = { index: 1, count: -1 };
    const S_DB = [];
    if (S_STATUS) {
        fs.readdirSync(path.join(S_DIR)).forEach((nm, id, ar) => {
            (S_SEARCH.count == -1) ? S_SEARCH.count = ar.length : false;
            const file_get_type = (fs.statSync(path.join(S_DIR, nm)).isDirectory()) ? "folder" : "file";
            const OR_NAME = path.basename(S_DIR);
            const FO_KEY = String(path.normalize(S_DIR)).replace(path.normalize(ORIGIN_LS), ".");
            if (file_get_type == "folder") {
                R_DB.push({ dir: FO_KEY.concat("\\").concat(nm), name: nm });
                S_DB.push(nm);
                ISRUN = true;
            }
            else if (file_get_type == "file") {
                G_DB.push({ dir: FO_KEY, name: nm });
            }
            if (S_SEARCH.count === S_SEARCH.index) {
                SUB_LS(S_DIR, S_DB);
            }
            else {
                S_SEARCH.index++;
            }
        });
    }
    ISRUN = false;
};
const SUB_LS = (d, a) => {
    if (a.length == 0 && !ISRUN) {
        ISDONE = true;
    }
    else {
        for (const sublist of a) {
            LS_DIR(path.join(d, sublist));
        }
    }
};
const S_EXPORT = (ls, data) => {
    LS_DIR(ls);
    let S_ORIGIN = [];
    const _F = new Promise(function (resolve) {
        S_ORIGIN.push({ folder: ".", files: [] });
        for (const iterator of R_DB) {
            S_ORIGIN.push({ folder: iterator.dir, files: [] });
        }
        resolve(S_ORIGIN);
    }).then((res) => {
        const _L = new Promise(function (resolve) {
            for (const file of G_DB) {
                res.forEach((element) => {
                    if (element.folder === file.dir) {
                        element.files.push(file.name);
                    }
                });
            }
            resolve(S_ORIGIN);
        }).then((list) => {
            data(list, false);
        }).catch((err) => {
            data([], err);
        });
    });
};
class ls {
    ListDirectory(DIRECTORY, CALL) {
        S_EXPORT(DIRECTORY, (data, err) => {
            CALL(data, err);
        });
    }
}
exports.ls = ls;

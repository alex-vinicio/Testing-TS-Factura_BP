"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUID = void 0;
//console.log(prod1.imprimirTabla(), prod2.imprimirTabla());
var newUID = function () {
    return Math.random().toString(36).slice(2);
};
exports.newUID = newUID;

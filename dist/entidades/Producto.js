"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoImp = void 0;
var global_functions_1 = require("../utilities/global.functions");
var ProductoImp = /** @class */ (function () {
    function ProductoImp() {
        this.id = 0;
        this.fechaRegistro = new Date();
        this.estado = "";
        this.nombre = "";
        this.precioUnitario = 0;
        this.cantidad = 0;
        this.fechaRegistro = new Date();
    }
    ProductoImp.prototype.cantidadTotal = function () {
        return this.cantidad * this.precioUnitario;
    };
    ProductoImp.prototype.imprimirTabla = function () {
        return "".concat(this.id, " | ").concat(this.nombre, " | $").concat(this.precioUnitario, " | ").concat(this.cantidad, " | $").concat(this.cantidadTotal(), "\n");
    };
    ProductoImp.prototype.reasignedRandom = function () {
        if (this.id === 0) {
            this.id = (0, global_functions_1.newUID)();
            return true;
        }
        else {
            return false;
        }
    };
    return ProductoImp;
}());
exports.ProductoImp = ProductoImp;

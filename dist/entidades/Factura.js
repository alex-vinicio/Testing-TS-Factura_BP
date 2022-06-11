"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaturaImp = void 0;
//instanciacion de objetos
var FaturaImp = /** @class */ (function () {
    function FaturaImp() {
        this.id = 0;
        this.fechaRegistro = new Date();
        this.estado = "";
        this.dirrecion = "";
        this.nombreCliente = "";
        this.fechaTransaccion = new Date();
        this.iva = 0;
        this.productos = [];
        this.fechaRegistro = new Date();
    }
    FaturaImp.prototype.subTotalPagar = function () {
        var totalPrecio = 0;
        this.productos.forEach(function (producto) {
            totalPrecio += producto.cantidadTotal();
        });
        return totalPrecio;
    };
    FaturaImp.prototype.totalConImpuestos = function () {
        var total = this.subTotalPagar();
        return total + (total * (this.iva / 100));
    };
    FaturaImp.prototype.agregarProduto = function (prod) {
        var aux = false;
        if (this.productos.length > 0) {
            this.productos.map(function (producto) {
                if (prod.id == producto.id) {
                    console.log("El nuevo producto ".concat(producto.nombre, " ya tiene un id:").concat(producto.id, " asignado, incrementando ").concat(prod.cantidad, " al Stock!!"));
                    producto.cantidad += prod.cantidad;
                    producto.precioUnitario = prod.precioUnitario;
                    aux = true;
                    return;
                }
            });
        }
        if (!aux) {
            this.productos.push(prod);
        }
    };
    FaturaImp.prototype.imprimirFactura = function () {
        return "****************************************\n\tFACTURACION AA\n****************************************\n".concat(this.id, "\tCliente:").concat(this.nombreCliente, "\n").concat(this.dirrecion, "\tFecha:").concat(this.fechaTransaccion.toLocaleDateString(), "\n****************************************\n").concat(this.productos.map(function (producto) { return producto.imprimirTabla(); }).join(""), "\nSubtotal: $").concat(this.subTotalPagar(), "\nIVA: (").concat(this.iva, "%)\nTotal: $").concat(this.totalConImpuestos(), "\n****************************************\n");
    };
    return FaturaImp;
}());
exports.FaturaImp = FaturaImp;

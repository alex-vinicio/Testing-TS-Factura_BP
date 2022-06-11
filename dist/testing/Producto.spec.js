"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Producto_1 = require("../entidades/Producto");
describe("Producto class", function () {
    test("Si el Objeto instanciado es de tipo #ProductoImp", function () {
        var producto = new Producto_1.ProductoImp();
        var interfaceP = producto;
        expect(producto).toBeInstanceOf(Producto_1.ProductoImp);
        expect(interfaceP).not.toBe(Producto_1.ProductoImp);
    });
    test("Inicialiizando los atributos de la clase #ProductoImp", function () {
        var producto = new Producto_1.ProductoImp();
        var valorImprimir = "0 |  | $0 | 0 | $0\n";
        expect(producto.id).toBe(0);
        expect(producto.fechaRegistro).toBeInstanceOf(Date);
        expect(producto.estado).toBe("");
        expect(producto.nombre).toBe("");
        expect(producto.precioUnitario).toBe(0);
        expect(producto.cantidad).toBe(0);
        expect(producto.cantidadTotal()).toBe(0);
        expect(producto.imprimirTabla()).toBe(valorImprimir);
        expect(producto.reasignedRandom()).toBe(true);
    });
    test("Verificando un #Producto agregado y sus atributos", function () {
        var productoUno = new Producto_1.ProductoImp();
        productoUno.nombre = "Papas";
        productoUno.precioUnitario = 100;
        productoUno.cantidad = -1;
        expect(productoUno.id = 1).toBe(1);
        expect(productoUno.id = "RRMMDD-S").toBe("RRMMDD-S");
        expect(productoUno.reasignedRandom()).toBe(false);
        expect(productoUno.nombre).toBe("Papas");
        expect(productoUno.precioUnitario).toBe(100);
        expect(productoUno.cantidad).not.toBe(1);
        //extrae con 2 decimales la cantidad total enString
        expect(productoUno.cantidadTotal().toFixed(2)).toBe("-100.00");
    });
    test("Verificando al modificar un #Producto existente", function () {
        var producto = new Producto_1.ProductoImp();
        producto.id = "RRMMDD-S";
        producto.nombre = "Atun";
        producto.precioUnitario = 2;
        producto.cantidad = 4;
        //edit values
        producto.cantidad = 4;
        producto.precioUnitario = 2;
        expect(producto.cantidadTotal()).toBe(8);
        expect(producto.imprimirTabla()).toBe("RRMMDD-S | Atun | $2 | 4 | $8\n");
    });
    test("Validando Listas de #ProductoImp y un valor aleatorio", function () {
        var producto = [];
        for (var index = 0; index < 5; index++) {
            producto.push(new Producto_1.ProductoImp());
        }
        expect(producto.length).toBe(5);
        expect(producto[4]).toBeInstanceOf(Producto_1.ProductoImp);
        expect(producto[4].cantidadTotal()).toBe(0);
    });
});

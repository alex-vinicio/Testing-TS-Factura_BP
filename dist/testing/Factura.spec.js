"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Factura_1 = require("../entidades/Factura");
var Producto_1 = require("../entidades/Producto");
describe("Factura class", function () {
    var productoUno = new Producto_1.ProductoImp();
    productoUno.nombre = "Papas";
    productoUno.precioUnitario = 5;
    productoUno.cantidad = 4;
    var productoDos = new Producto_1.ProductoImp();
    productoDos.id = "PEP-1234";
    productoDos.nombre = "Maiz";
    productoDos.precioUnitario = 10;
    productoDos.cantidad = 4;
    test("Si el Objeto instanciado es de tipo #FaturaImp y setea Productos a la misma", function () {
        var factura = new Factura_1.FaturaImp();
        expect(factura).toBeInstanceOf(Factura_1.FaturaImp);
        expect(factura.imprimirFactura()).not.toBeNull();
    });
    test("Validacion si subtotal es [60] si 2 productos: prod1 cantidad [4] precio[5] y prod2 cantidad [4] precio[10]", function () {
        var factura = new Factura_1.FaturaImp();
        factura.productos.push(productoUno);
        factura.productos.push(productoDos);
        expect(factura.subTotalPagar()).toBe(60);
    });
    test("Validacion con inpuesto de [20] si 2 producto: prod1 cantidad [4] precio[5] y prod2 cantidad [4] precio[10]", function () {
        var factura1 = new Factura_1.FaturaImp();
        factura1.iva = 20;
        factura1.agregarProduto(productoUno);
        factura1.agregarProduto(productoDos);
        expect(factura1.totalConImpuestos()).toBe(72);
    });
    test("Validar si añade el producto en stock con id [PEP-1234] cantidad [8]", function () {
        var factura1 = new Factura_1.FaturaImp();
        factura1.iva = 20;
        factura1.agregarProduto(productoUno);
        factura1.agregarProduto(productoDos);
        //producto repetido con id [PEP-1234] 
        factura1.agregarProduto(productoDos);
        expect(factura1.productos[1].cantidad).toBe(8);
    });
});

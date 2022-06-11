import { FaturaImp } from "../entidades/Factura";
import { ProductoImp } from "../entidades/Producto";

describe("Factura class", () => {
    var productoUno = new ProductoImp();
    productoUno.nombre = "Papas";
    productoUno.precioUnitario = 5;
    productoUno.cantidad = 4;

    var productoDos = new ProductoImp();
    productoDos.id = "PEP-1234";
    productoDos.nombre = "Maiz";
    productoDos.precioUnitario = 10;
    productoDos.cantidad = 4;

    test("Si el Objeto instanciado es de tipo #FaturaImp y setea Productos a la misma", () => {
        var factura = new FaturaImp();

        expect(factura).toBeInstanceOf(FaturaImp);

        expect(factura.imprimirFactura()).not.toBeNull();
    })

    test("Validacion si subtotal es [60] si 2 productos: prod1 cantidad [4] precio[5] y prod2 cantidad [4] precio[10]", () => {
        var factura = new FaturaImp();
        factura.productos.push(productoUno);
        factura.productos.push(productoDos);

        expect(factura.subTotalPagar()).toBe(60);
    })

    test("Validacion con inpuesto de [20] si 2 producto: prod1 cantidad [4] precio[5] y prod2 cantidad [4] precio[10]", () => {
        var factura1 = new FaturaImp();
        factura1.iva = 20;
        factura1.agregarProduto(productoUno);
        factura1.agregarProduto(productoDos);

        expect(factura1.totalConImpuestos()).toBe(72);
    })

    test("Validar si añade el producto en stock con id [PEP-1234] cantidad [8]", () => {
        var factura1 = new FaturaImp();
        factura1.iva = 20;
        factura1.agregarProduto(productoUno);
        factura1.agregarProduto(productoDos);

        //producto repetido con id [PEP-1234] 
        factura1.agregarProduto(productoDos);

        expect(factura1.productos[1].cantidad).toBe(8);
    })


});
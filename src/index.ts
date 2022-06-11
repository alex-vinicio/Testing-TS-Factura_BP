import {FaturaImp} from "./entidades/Factura";
import {ProductoImp} from "./entidades/Producto"
import { newUID } from "./utilities/global.functions";


var prod1 = new ProductoImp();
prod1.id = newUID();
prod1.nombre = "Tomate";
prod1.precioUnitario = 2;
prod1.cantidad = 2;

var prod2 = new ProductoImp();
prod2.id = "PEP-1234";
prod2.nombre = "Pepino";
prod2.precioUnitario = 3;
prod2.cantidad = 3;

var fact = new FaturaImp();
fact.id = "ABC-1234-FACT";
fact.estado = "Pendiente";
fact.dirrecion = "Calle Empaña y Olmedo";
fact.nombreCliente = "Juan Pit";
fact.fechaTransaccion = new Date();
fact.iva = 16;
fact.productos.push(prod1);
fact.productos.push(prod2);
fact.detalles = "La venta 1 de esta factura";


console.log(fact.imprimirFactura());

console.log(`**************** Incrementar con el mismo Codigo ****************\n`);
var prodRepeat = new ProductoImp();
prodRepeat.id = "PEP-1234";
prodRepeat.nombre = "Pepino";
prodRepeat.precioUnitario = 4;
prodRepeat.cantidad = 3;
fact.agregarProduto(prodRepeat);

console.log(fact.imprimirFactura());

console.log(`**************** insertar n productos automaticamente ****************\n`);

let indexRandom = Math.floor(Math.random() * (1-100)+100);
console.log(`Numero de productos a insertar: ${indexRandom}`);
for (let index = 0; index < indexRandom; index++) {
  let prod = new ProductoImp();
  prod.id = newUID();
  prod.nombre = "Sal";
  prod.precioUnitario = Math.floor(Math.random() *(1-8)+8); 
  prod.cantidad = Math.floor(Math.random() * (1-20)+20);
  fact.agregarProduto(prod);
}
console.log(fact.imprimirFactura());
console.log("**************************************************************************");
var productoUno = new ProductoImp();
    productoUno.nombre = "Papas";
    productoUno.precioUnitario = 5;
    productoUno.cantidad = 4;

    var productoDos = new ProductoImp();
    productoDos.id = "PEP-1234";
    productoDos.nombre = "Maiz";
    productoDos.precioUnitario = 10;
    productoDos.cantidad = 4;

    var factura = new FaturaImp();
        factura.productos.push(productoUno);
        factura.productos.push(productoDos);
    console.log(factura.imprimirFactura());
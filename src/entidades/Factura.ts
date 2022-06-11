import { FacturaI } from "../interfaces/Factura.interface";
import { ProductoImp } from "../entidades/Producto";

//instanciacion de objetos
export class FaturaImp implements FacturaI {
  public id: number | string = 0;
  public fechaRegistro: Date = new Date();
  public estado: string = "";
  public dirrecion: string = "";
  public nombreCliente: string = "";
  public fechaTransaccion: Date = new Date();

  public iva: number = 0;
  public productos: ProductoImp[] = [];
  public detalles?: string;
  constructor() {
    this.fechaRegistro = new Date();
  }
  public subTotalPagar(): number {
    let totalPrecio = 0;
    this.productos.forEach((producto) => {
      totalPrecio += producto.cantidadTotal();
    });
    return totalPrecio;
  }

  public totalConImpuestos(): number {
    var total = this.subTotalPagar();
    return total + (total * (this.iva / 100));
  }

  public agregarProduto(prod: ProductoImp): void {
    var aux: boolean = false;

    if (this.productos.length > 0) {
      this.productos.map((producto) => {
        if (prod.id == producto.id) {
          console.log(`El nuevo producto ${producto.nombre} ya tiene un id:${producto.id} asignado, incrementando ${prod.cantidad} al Stock!!`);
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
  }

  public imprimirFactura(): string {
    return `****************************************\n\tFACTURACION AA\n****************************************\n${this.id}\tCliente:${this.nombreCliente}\n${this.dirrecion}\tFecha:${this.fechaTransaccion.toLocaleDateString()}\n****************************************\n${this.productos.map((producto) => producto.imprimirTabla()).join("")}\nSubtotal: $${this.subTotalPagar()}\nIVA: (${this.iva}%)\nTotal: $${this.totalConImpuestos()}\n****************************************\n`;
  }
}
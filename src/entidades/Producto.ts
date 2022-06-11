import { ProductoI } from "../interfaces/Producto.interface";
import { newUID } from "../utilities/global.functions";

export class ProductoImp implements ProductoI {
  id: number | string = 0;
  fechaRegistro = new Date();
  estado: string = "";
  nombre: string = "";
  precioUnitario: number = 0;
  cantidad: number = 0;
  constructor() {
    this.fechaRegistro = new Date();
  }

  cantidadTotal(): number {
    return this.cantidad * this.precioUnitario;
  }
  imprimirTabla(): string {
    return `${this.id} | ${this.nombre} | $${this.precioUnitario} | ${this.cantidad
      } | $${this.cantidadTotal()}\n`;
  }

  reasignedRandom(): boolean {
    if (this.id === 0) {
      this.id = newUID();
      return true;
    } else {
      return false;
    }
  }
}
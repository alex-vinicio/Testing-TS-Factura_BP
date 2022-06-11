import { GeneraData } from "./global.Data";
import {ProductoI} from "./Producto.interface";

export interface FacturaI extends GeneraData {
    dirrecion: string;
    nombreCliente: string;
    fechaTransaccion: Date;
    iva: number;
    detalles?: string;

    productos: ProductoI[];
}
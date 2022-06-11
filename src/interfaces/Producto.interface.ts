import { GeneraData } from "./global.Data";

export interface ProductoI extends GeneraData {
    nombre: string;
    precioUnitario: number;
    cantidad: number;
}
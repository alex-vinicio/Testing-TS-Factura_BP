import {ProductoImp} from "../entidades/Producto";
import {ProductoI} from "../interfaces/Producto.interface";

describe("Producto class", () => {

    test("Si el Objeto instanciado es de tipo #ProductoImp", () => {
        var producto = new ProductoImp();
        
        let interfaceP: ProductoI = producto;


        expect(producto).toBeInstanceOf(ProductoImp);
        expect(interfaceP).not.toBe(ProductoImp);

    })

    test("Inicialiizando los atributos de la clase #ProductoImp", () => {
        var producto = new ProductoImp();
        let valorImprimir: string = "0 |  | $0 | 0 | $0\n";

        expect(producto.id).toBe(0);
        expect(producto.fechaRegistro).toBeInstanceOf(Date);
        expect(producto.estado).toBe("");
        expect(producto.nombre).toBe("");
        expect(producto.precioUnitario).toBe(0);
        expect(producto.cantidad).toBe(0);

        expect(producto.cantidadTotal()).toBe(0);
        expect(producto.imprimirTabla()).toBe(valorImprimir);
        expect(producto.reasignedRandom()).toBe(true);
    })

    test("Verificando un #Producto agregado y sus atributos", () => {
        var productoUno = new ProductoImp();
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
            
    })

    test("Verificando al modificar un #Producto existente", () => {
        var producto = new ProductoImp();
        producto.id = "RRMMDD-S"
        producto.nombre = "Atun";
        producto.precioUnitario = 2;
        producto.cantidad = 4;

        //edit values
        producto.cantidad = 4;
            producto.precioUnitario = 2;
        expect(
            producto.cantidadTotal()
            ).toBe(8);

        expect(producto.imprimirTabla()).toBe("RRMMDD-S | Atun | $2 | 4 | $8\n");
    })

    test("Validando Listas de #ProductoImp y un valor aleatorio", () => {
        var producto: ProductoImp[] = [];
        for (let index = 0; index < 5; index++) {
            producto.push(new ProductoImp());
        }

        expect(producto.length).toBe(5);
        expect(producto[4]).toBeInstanceOf(ProductoImp);
        expect(producto[4].cantidadTotal()).toBe(0);
    })
});
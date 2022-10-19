import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProducEscogidosService {
  
  productos: Producto[] = [
    {
      id: "P001",
      nombre: "Triplay",
      precio: 220,
      stock: 40,
      descripcion: "Madera ligera",
      imagen:"/assets/img/triplay.png"
    },

    {
      id: "P002",
      nombre: "Tablas",
      precio: 220,
      stock: 40,
      descripcion: "Madera ligera",
      imagen:"/assets/img/tablas.webp"
    }

  ];

  seleccionados: string[] =[];

  constructor() { }

  agregarSeleccionado(elemento: string): void{
    this.seleccionados.push(elemento);
  }
}

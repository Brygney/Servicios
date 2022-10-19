import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProducEscogidosService } from 'src/app/servicios/produc-escogidos.service';

@Component({
  selector: 'app-galeria-productos',
  templateUrl: './galeria-productos.component.html',
  styleUrls: ['./galeria-productos.component.scss']
})
export class GaleriaProductosComponent implements OnInit {
  @Input() productos: Producto[] = [];
  seleccionados: string[] = [];
  
  constructor(private producescogidoservice: ProducEscogidosService) { 
    this.seleccionados = producescogidoservice.seleccionados;
  }

  ngOnInit(): void {
  }

  seleccionar(nombre: string): void{
    //this.seleccionados++;
    this.producescogidoservice.agregarSeleccionado(nombre);
    console.log(this.seleccionados);
  }

}

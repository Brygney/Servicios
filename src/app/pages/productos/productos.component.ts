import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProducEscogidosService } from 'src/app/servicios/produc-escogidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(producescogidoservice: ProducEscogidosService) { 
    this.productos= producescogidoservice.productos;
  }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-presentacion-productos',
  templateUrl: './presentacion-productos.component.html',
  styleUrls: ['./presentacion-productos.component.scss']
})
export class PresentacionProductosComponent implements OnInit {
[x: string]: any;

  @Input() producto: Producto ={
    id: "",
    nombre: "",
    precio: 0,
    stock: 0,
    descripcion: "",
    imagen:""
  };

  @Output() pressButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickAgregar(): void{
    this.pressButton.emit();
  }

}

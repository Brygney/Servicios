import { Component, OnInit } from '@angular/core';
import { ProducEscogidosService } from 'src/app/servicios/produc-escogidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  seleccionados: string[] = [];

  constructor(private producescogidoservice: ProducEscogidosService) { 
    this.seleccionados = producescogidoservice.seleccionados;
  }

  ngOnInit(): void {
  }

}

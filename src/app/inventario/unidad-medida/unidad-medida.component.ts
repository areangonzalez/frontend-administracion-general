import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.scss']
})
export class UnidadMedidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  realizarBusqueda(params: any) {
    console.log(params);
  }

}

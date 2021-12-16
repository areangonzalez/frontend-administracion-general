import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.scss']
})
export class UnidadMedidaComponent implements OnInit {
  public listado: any = [
    { "id": 1, "nombre": "Kilogramo", "simbolo": "kg" },
    { "id": 2, "nombre": "Gramo", "simbolo": "gr" },
    { "id": 3, "nombre": "Litro", "simbolo": "lt" },
    { "id": 4, "nombre": "Mililitro", "simbolo": "ml" },
    { "id": 5, "nombre": "Unidad", "simbolo": "un" },
    { "id": 6, "nombre": "Centimetros cúbicos", "simbolo": "cm3" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  realizarBusqueda(params: any) {
    console.log(params);
  }

}

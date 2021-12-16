import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  public listado: any = [
    { "id": 1, "nombre": "alimento/s" },
    { "id": 2, "nombre": "Bebida/s" },
    { "id": 3, "nombre": "Otros" }
  ];
  public titulos: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.renderTabla(this.listado);
  }

  realizarBusqueda(params: any) {
    console.log(params);
  }

  renderTabla(listado:any) {
    this.titulos = Object.keys(listado[0]);
    this.listado = listado;
  }

}

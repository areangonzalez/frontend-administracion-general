import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  public productos: any[] = [
    /* { id: 1, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 1,
     marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" },
    { id: 2, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 1,
     marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" },
    { id: 3, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 0,
     marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" }, */
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

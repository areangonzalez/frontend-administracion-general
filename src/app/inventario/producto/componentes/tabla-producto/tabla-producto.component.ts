import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'componente-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.scss']
})
export class TablaProductoComponent implements OnInit {
  @Input("listado") public listado: any;

  constructor() { }

  ngOnInit(): void {
  }

}

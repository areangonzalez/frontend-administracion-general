import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ConfigurarListas, ConfigurarPagina } from 'src/app/core/model';

@Component({
  selector: 'componente-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.scss']
})
export class TablaProductoComponent {
  @Input("configPaginacion") public configPaginacion: any;
  @Input("listadosArray") public listadosArray!: ConfigurarListas;
  @Output("cambioDePagina") public cambioDePagina = new EventEmitter();

  constructor() {}

  cambiarPagina(pagina:number) {
    this.cambioDePagina.emit(pagina);
  }

}

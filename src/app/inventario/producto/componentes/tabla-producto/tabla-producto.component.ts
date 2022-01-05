import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfigurarListas } from 'src/app/core/model';
import { ProductoService } from 'src/app/core/service';

@Component({
  selector: 'componente-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.scss']
})
export class TablaProductoComponent {
  @Input("configPaginacion") public configPaginacion: any;
  @Input("listadosArray") public listadosArray!: ConfigurarListas;
  @Output("cambioDePagina") public cambioDePagina = new EventEmitter();

  constructor( private _productoService: ProductoService ) {}

  cambiarPagina(pagina:number, pagesize: number) {
    this.cambioDePagina.emit({page: pagina, pagesize: pagesize});
  }

  cambiarCantRegistros(cant:any) {
    this.configPaginacion.pageSize = parseInt(cant.target.value);
    this.cambiarPagina(this.configPaginacion.page, this.configPaginacion.pageSize);
  }

  bajaProducto(confirma: boolean, id: number) {
    if (confirma) {
      this.actualizarListado(true); // borrar esta linea y descomentar la de abajo
      /* this._productoService.baja(id).subscribe(
        resultado => { // se confirma la baja del producto
          this.actualizarListado(true);
        }, error => { console.log(error); }); */
    }
  }

  actualizarListado(confirmar: boolean) {
    if (confirmar) {
      this.cambiarPagina(this.configPaginacion.page, this.configPaginacion.pageSize);
    }
  }
}

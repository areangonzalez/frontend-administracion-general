import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurarPagina } from 'src/app/core/model';
import { ConfiguracionParaPaginarService } from 'src/app/core/service';

@Component({
  selector: 'shared-tabla-personalizada',
  templateUrl: './tabla-personalizada.component.html',
  styleUrls: ['./tabla-personalizada.component.scss']
})
export class TablaPersonalizadaComponent implements OnInit {
  @Input("titulosArray") public titulosArray: any;
  @Input("listaDatos") public listaDatos: any;
  @Input("nombreAbm") public nombreAbm: any;
  @Output("obtenerDatos") public obtenerDatos = new EventEmitter();
  @Output("bajarItem") public bajarItem = new EventEmitter();
  public tituloEditar = 'Editar ';
  public pagina: number = 1;
  public configPaginacion:ConfigurarPagina = new ConfigurarPagina();
  public pageSize = 10;
  public listadoRender: any[] = [];
  public titulosTabla: string[] =[];

  constructor(
      private _router: Router, private _configurarPagina: ConfiguracionParaPaginarService
    ) {
  }

  ngOnInit() {
    this.tituloEditar += this.nombreAbm;
    this.eliminarElementoId(this.titulosArray);
    this.paginacion(this.listaDatos, this.pagina, this.pageSize);
  }

  eliminarElementoId(listaTitulos: any) {
    for (let i = 0; i < listaTitulos.length; i++) {
      if (listaTitulos[i] !== 'id') {
        this.titulosTabla.push(listaTitulos[i]);
      }
    }
  }

  editar(datos:any){
    if (datos !== false){
      this.obtenerDatos.emit(datos);
    }
  }

  agregar(datos:any){
    if (datos !== false){
      this.obtenerDatos.emit(datos);
    }
  }

  borrar(dato:any){
    if (dato !== false){
      this.bajarItem.emit(dato);
    }
  }

  paginacion(listadoArray: any, pagina: number, pagesize:number) {
    let datos = {pagesize: pagesize, page: pagina, total_filtrado: listadoArray.length};
    this.configPaginacion = this._configurarPagina.config(datos, pagina);
    this.listadoRender = this._configurarPagina.paginarListado(pagina, pagesize, listadoArray);
  }

  cambiarCantRegistros(cant:any) {
    this.pageSize = cant.target.value;
    this.paginacion(this.listaDatos, this.pagina, this.pageSize);
  }

  cambiarPagina(pagina:number) {
    console.log(pagina);

    this.paginacion(this.listaDatos, pagina, this.pageSize);
  }

}

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
  @Input("configPaginacion") public configPaginacion: ConfigurarPagina = new ConfigurarPagina();;
  @Output("obtenerDatos") public obtenerDatos = new EventEmitter();
  @Output("bajarItem") public bajarItem = new EventEmitter();
  @Output("cambioDePagina") public cambioDePagina = new EventEmitter();
  public tituloEditar = 'Editar ';
  public colspan: number = 0;
  public listadoRender: any[] = [];
  public titulosTabla: string[] =[];

  constructor( private _router: Router, private _configurarPagina: ConfiguracionParaPaginarService ) {}

  ngOnInit() {
    this.tituloEditar += this.nombreAbm;
    this.eliminarElementoId(this.titulosArray);
  }
  /**
   * saca el elemento id de los titulos
   * @param listaTitulos agrega solo los campos de informacion relevantes
   */
  eliminarElementoId(listaTitulos: any) {
    for (let i = 0; i < listaTitulos.length; i++) {
      if (listaTitulos[i] !== 'id' && listaTitulos[i] !== 'activo') {
        this.titulosTabla.push(listaTitulos[i]);
      }
    }
    this.colspan = this.titulosTabla.length + 1;
  }
  /**
   * Envia los datos a editar
   * @param datos datos que seran editados
   */
  editar(datos:any){
    if (datos !== false){
      this.obtenerDatos.emit(datos);
    }
  }
  /**
   * Envia los datos a crear
   * @param datos parametros para su creado
   */
  agregar(datos:any){
    if (datos !== false){
      this.obtenerDatos.emit(datos);
    }
  }
  /**
   * Envia el dato a dar de baja
   * @param dato dato en este caso iria el id del array
   */
  borrar(dato:any){
    if (dato !== false){
      this.bajarItem.emit(dato);
    }
  }
  /**
   * realiza el cambio de paginacion
   * @param cant Cantidad seleccionada del tama??o de pagina
   */
  cambiarCantRegistros(cant:any) {
    this.configPaginacion.pageSize = parseInt(cant.target.value);
    this.cambiarPagina(this.configPaginacion.page);
  }
  /**
   * Cambia la pagina del listado
   * @param pagina numero de pagina
   */
  cambiarPagina(pagina:number) {
    this.cambioDePagina.emit(pagina);
  }

  inactivo(esActivo: any) {
    if(esActivo == 0) {
      return "Este Registro se encuentra Inactivo.";
    }
    else{ return "" ; }
  }

}

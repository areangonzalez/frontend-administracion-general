import { Component, Input, OnInit } from '@angular/core';
import { ConfigurarPagina } from 'src/app/core/model';
import { ConfiguracionParaPaginarService, LocalidadExtraService, LocalidadBackendService, NotificacionService } from 'src/app/core/service';

@Component({
  selector: 'componente-localidad-lista',
  templateUrl: './localidad-lista.component.html',
  styleUrls: ['./localidad-lista.component.scss']
})
export class LocalidadListaComponent implements OnInit {
  @Input("listados") public listados: any;
  public busqueda: any = {};
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();
  public tamanioPagina: number = 20;
  public tamanioPaginaLista: any = [];
  public localidadesBackend: any = [];
  public nombreLocalidadGuardada: string = '';


  constructor(
    private _configPagina: ConfiguracionParaPaginarService, private _localidadExtraService: LocalidadExtraService,
    private _localidadBackendService: LocalidadBackendService, private _msj: NotificacionService
  ) { }

  ngOnInit(): void {
    this.prepararListado(this.listados.localidadesBackend, 1);
  }
  /**
   * agrega una localidad en el listado extra
   * @param confirmacion valor booleano que indica la confirmacion del agregado
   * @param id numero identificador de la localidad a agregar
   */
   agregarLocalidadExtra(confirmacion: boolean, id:number) {
    if (confirmacion) {
      this._localidadExtraService.guardar(id).subscribe(
        respuesta => {
          this._msj.showSuccess(respuesta.message);
          this.cambiarPagina(this.configPaginacion.page);
          this.actualizarLocalidadesExtras();
        }, error => { this._msj.showDanger(error); }
      )
    }
  }

  /**
   * @function buscar busca en listado
   * @param apiBusqueda parametros de filtracion
   */
   public realizarBusqueda(apiBusqueda:any, page: number) {
    // Agrego la paginacion a la busqueda avanzada
    Object.assign(apiBusqueda, {page: page-1, pagesize: this.configPaginacion.pageSize});
    // agrego la busqueda en la nueva variable
    this.busqueda = apiBusqueda;
    // configuro para que se dirija a la primera pagina
    this.configPaginacion.page = 1;
    // realizo la busqueda
    this._localidadBackendService.buscar(apiBusqueda).subscribe(
      respuesta => {
        this.prepararListado(respuesta, page);
      }, error => { this._msj.showDanger(error); }
    )
  }
  /**
   * prepara el listado con paginacion
   * @param listado listado de localidades
   * @param pagina numero de pagina
   */
  prepararListado(listado:any, pagina: number) {
    // preparo la variable con la configuracion para el paginado
    this.configPaginacion = this._configPagina.config(listado, pagina);

    this.localidadesBackend = listado.resultado;
    this.tamanioPaginaLista = [{size: 10}, {size: 20}, {size: 50}, {size: 100}];
  }
  /**
   * Solicito el cambio de pagina
   * @param pagina numero de pagina
   */
  cambiarPagina(pagina:any) {
    this.realizarBusqueda(this.busqueda, pagina);
  }
  /**
   * cambia el tama??o de paginado
   * @param size tama??o de pagina
   */
  cambiarTamanioPagina(size: number) {
    this.configPaginacion.pageSize = size;
    this.realizarBusqueda(this.busqueda, this.configPaginacion.page);
  }
  /**
   * Se actualiza el listado de al registrar una localidad
   * @param confirmacion objeto { confirma: true, nombreLocalidad: "localidad" } confirma el guardado y trae nombre de la localidad
   */
  actualizarRegistro(confirmacion: any) {
    if (confirmacion.confirma) {
      this.nombreLocalidadGuardada = confirmacion.nombreLocalidad;
      this.realizarBusqueda({nombre: this.nombreLocalidadGuardada}, this.configPaginacion.page);
    }
  }
  /**
   * al agregar una localidad en listado extra actualizo el listado de localidadesExtras
   */
  actualizarLocalidadesExtras() {
    this._localidadExtraService.buscar({page: 0, pagesize: 20}).subscribe(
      respuesta => {
        this.listados.localidadesExtras = respuesta;
      }, error => { this._msj.showDanger(error); }
    );
  }
}


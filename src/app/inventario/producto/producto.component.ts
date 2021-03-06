import { Component, OnInit } from '@angular/core';
import { ConfiguracionParaPaginarService, ProductoService, NotificacionService } from '../../core/service';
import { ConfigurarListas, ConfigurarPagina } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'inventario-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  public configurarListas: ConfigurarListas = {}; // array de objetos de listas
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();
  public filtradoBusqueda: any = {};

  constructor(
    private _configurarPaginacion: ConfiguracionParaPaginarService, private _productoService: ProductoService, private _route: ActivatedRoute,
    private _msj: NotificacionService
  ) { }

  ngOnInit(): void {
    this.configurarListas.categorias = this._route.snapshot.data["categorias"];
    this.configurarListas.marcas = this._route.snapshot.data["marcas"];
    this.configurarListas.unidad_medida = this._route.snapshot.data["unidadMedidas"];

    this.prepararListado(this._route.snapshot.data["productos"], 1);
  }
  /**
   * Prepara el listado y su paginación
   * @param listado Listado de array de objetos
   * @param pagina numero de pagina
   */
  prepararListado(listado:any, pagina:number) {
    this.configPaginacion = this._configurarPaginacion.config(listado, pagina);
    this.configurarListas.productos = listado.resultado;
  }
  /**
   * Solicito el cambio de pagina respetando los parametros de busqueda
   * @param pagina numero de página
   */
  cambiarPagina(datosPaginado: any) {
    this.buscar(this.filtradoBusqueda, datosPaginado.page, datosPaginado.pagesize)
  }
  /**
   * Solicito la busqueda con parametros personalizados y número de página
   * @param params objeto que contiene los paramatros a buscar
   * @param page numero de pagina
   */
  buscar(params:any, page:number, pagesize: number) {
    Object.assign(params, {page: page-1, pagesize: pagesize});
    this.filtradoBusqueda = params;

    // se descomenta la linea para poder utilizar el renderizado al api que da servicio
    this._productoService.buscar(params).subscribe(
      respuesta => {
        this.prepararListado(respuesta, page);
    }, error => { this._msj.showDanger(error); });
  }


}

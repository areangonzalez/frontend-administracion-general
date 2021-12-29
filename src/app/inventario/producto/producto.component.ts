import { Component, OnInit } from '@angular/core';
import { ConfiguracionParaPaginarService } from '../../core/service';
import { ConfigurarListas, ConfigurarPagina } from 'src/app/core/model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  public configurarListas: ConfigurarListas = {}; // array de objetos de listas
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();
  public filtradoBusqueda: any = {};

  public productos: any = {
    pagesize: 20, page: 0, total_filtrado: 3,
    resultado: [
      { id: 1, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 1,
      marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" },
      { id: 2, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 1,
      marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" },
      { id: 3, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 0,
      marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" }
    ]};

  constructor(
    private _configurarPaginacion: ConfiguracionParaPaginarService
  ) { }

  ngOnInit(): void {
    this.prepararListado(this.productos, 1)
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
  cambiarPagina(pagina: number) {
    console.log(pagina);
    this.buscar(this.filtradoBusqueda, pagina)
  }
  /**
   * Solicito la busqueda con parametros personalizados y número de página
   * @param params objeto que contiene los paramatros a buscar
   * @param page numero de pagina
   */
  buscar(params:any, page:number) {
    Object.assign(params, {page: page-1});
    this.filtradoBusqueda = params;
    console.log("Realizo la busqueda de productos con los parametros", params);

    /* this._comprobanteService.buscar(params).subscribe(
      respuesta => {
        this.prepararListadoingreso(respuesta, page);
    }, error => { this._mensaje.cancelado(error); }); */
  }


}

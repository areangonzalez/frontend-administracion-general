import { Component, OnInit } from '@angular/core';
import { ConfiguracionParaPaginarService, ProductoService } from '../../core/service';
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

  // BORRAR EL ARRAY CUANDO ESTE IMPLEMENTADO LA FUNCION DEL API
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
  public marca: any = [{ id: 1, nombre: "Arcor" },{ id: 2, nombre: "Ledesma" },{ id: 3, nombre: "3 arroyos" }];
  public categoria: any = [{ id: 1, nombre: "alimento/s" },{ id: 2, nombre: "Bebida/s" },{ id: 3, nombre: "Otros" }];
  public unidadMedida: any = [
    { id: 1, nombre: "Kilogramo", simbolo: "kg" },{ id: 2, nombre: "Gramo", simbolo: "gr" },
    { id: 3, nombre: "Litro", simbolo: "lt" },{ id: 4, nombre: "Mililitro", simbolo: "ml" },
    { id: 5, nombre: "Unidad", simbolo: "un" },{ id: 6, nombre: "Centimetros cúbicos", simbolo: "cm3" }
  ];


  constructor(
    private _configurarPaginacion: ConfiguracionParaPaginarService, private _productoService: ProductoService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.prepararListado(this._route.snapshot.data["productos"], 1);
    // DESCOMENTAR CUANDO EL API ESTE FUCNIONANDO
    /*
    this.configurarListas.categorias = this._route.snapshot.data["categorias"];
    this.configurarListas.marcas = this._route.snapshot.data["marcas"];
    this.configurarListas.unidad_medida = this._route.snapshot.data["unidadMedidas"]; */

    // BORRAR LOS DATOS DE PRUEBA NO SON NECESARIOS
    /* this.prepararListado(this.productos, 1); */
    this.configurarListas.categorias = this.categoria;
    this.configurarListas.marcas = this.marca;
    this.configurarListas.unidad_medida = this.unidadMedida;
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
    console.log("Realizo la busqueda de productos con los parametros", params); // log para borrar despues de confirmar el uso

    // se descomenta la linea para poder utilizar el renderizado al api que da servicio
    /* this._productoService.buscar(params).subscribe(
      respuesta => {
        this.prepararListado(respuesta, page);
    }, error => { this._mensaje.cancelado(error); }); */
  }


}

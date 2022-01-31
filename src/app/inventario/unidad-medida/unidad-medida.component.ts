import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurarPagina } from 'src/app/core/model';
import { UnidadMedidaService, ConfiguracionParaPaginarService } from 'src/app/core/service';

@Component({
  selector: 'inventario-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.scss']
})
export class UnidadMedidaComponent implements OnInit {
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();
  public listado: any = [];
  // borrar los datos de la variable y que quede un array solo
  public unidadMedida: any = {
    pagesize: 10, page: 0, total_filtrado: 3,
    resultado:[
    { "id": 1, "nombre": "Kilogramo", "simbolo": "kg" },
    { "id": 2, "nombre": "Gramo", "simbolo": "gr" },
    { "id": 3, "nombre": "Litro", "simbolo": "lt" },
    { "id": 4, "nombre": "Mililitro", "simbolo": "ml" },
    { "id": 5, "nombre": "Unidad", "simbolo": "un" },
    { "id": 6, "nombre": "Centimetros cúbicos", "simbolo": "cm3" }
  ]};
  public titulos: string[] = [];

  constructor(private _route: ActivatedRoute, private _unidadMedidaService: UnidadMedidaService, private _configurarPaginado: ConfiguracionParaPaginarService) { }

  ngOnInit(): void {
    // this.renderTabla(this._route.snapshot.data["unidadMedidas"]);
    this.renderTabla(this.unidadMedida);
  }
  /**
   * Aplica una busqueda con los parametros a buscar
   * @param params valores a buscar
   */
   realizarBusqueda(busqueda: any, pagina: number) {
    let params = Object.assign(busqueda, { pagesize: this.configPaginacion.pageSize, page: pagina - 1 })
    console.log(params);
    /* this._categoriaService.buscar(params).subscribe(
      resultado => {
        this.prepararListado(resultado, this.configPaginacion.page);
      }, error => { console.log(error); } // mensaje de error
    ) */
  }
  /**
   * Preparo el listado para separar los titulos de los datos
   * @param listado Objeto que contiene los datos de una tabla
   */
  renderTabla(listado:any) {
    this.titulos = Object.keys(listado.resultado[0]);
    this.prepararListado(listado, 1);
  }
  /**
   * Preparo la configuracion del paginado y listado0
   * @param listado Array de objetos que contiene los datos del api
   * @param pagina numero de pagina donde debe inicializar el listado
   */
   prepararListado(listado: any, pagina: number) {
    this.configPaginacion = this._configurarPaginado.config(listado, pagina);
    this.listado = listado.resultado;
  }
  /**
     * guardado de un elemento nuevo o editado.
     * @param datos datos a guardar
     */
   guardar(datos:any) {
    if (datos !== false){
      if (datos["id"] == 0){ // CREAR
        /* this._unidadMedidaService.guardar(datos, 0).subscribe(
          respuesta => {
            this._toastrService.success('Se ha creado una nueva unidad de medida!!!');
            this.prepararListado(respuesta, this.configPaginacion.page);
          }, error => { this._toastrService.error(error); }); */
      }else{ // EDITAR

        /* this._unidadMedidaService.guardar(datos, datos["id"]).subscribe(
          respuesta => {
            this._toastrService.success('La unidad de medida ha sido editado correctamente!!!');
            this.prepararListado(respuesta, this.configPaginacion.page);
        }, error => { this._toastrService.error(error); }); */
      }
    }
  }
  /**
   * borra un elemento del listado
   * @param id numero de identificador del elemento a borrar
   */
  borrar(id:number) {
    /* this._unidadMedidaService.borrar(id).subscribe(
      respuesta => {
        this._toastrService.success("Se ha dado de baja la unidad de medida correctamente.");
        this.prepararListado(respuesta, this.configPaginacion.page);
      }, error => { this._toastrService.error(error); }); */
  }

}

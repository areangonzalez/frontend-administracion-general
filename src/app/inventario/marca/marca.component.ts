import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurarPagina } from 'src/app/core/model';
import { MarcaService, ConfiguracionParaPaginarService } from 'src/app/core/service';

@Component({
  selector: 'inventario-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {
  public busquedaForm: FormGroup;
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();
  public listado: any = [];
  public titulos: string[] = [];

  constructor(
    private _route: ActivatedRoute, private _marcaService: MarcaService, private _configurarPaginado: ConfiguracionParaPaginarService,
    private _fb: FormBuilder
  ) {
    this.busquedaForm = _fb.group({
      global_param: ''
    });
  }

  ngOnInit(): void {
    this.renderTabla(this._route.snapshot.data["marcas"]);
  }

  realizarBusqueda(busqueda: any, pagina: number) {
    let params = Object.assign(busqueda, { pagesize: this.configPaginacion.pageSize, page: pagina - 1 })
    this._marcaService.buscar(params).subscribe(
      resultado => {
        this.prepararListado(resultado, this.configPaginacion.page);
      }, error => { console.log(error); } // mensaje de error
    )
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
        this._marcaService.guardar(datos, 0).subscribe(
          respuesta => {
            //this._toastrService.success('Se ha creado una nueva marca!!!');
            this.busquedaForm.patchValue({global_param: datos["nombre"]});
            this.realizarBusqueda(this.busquedaForm.value, this.configPaginacion.page);
          }, error => { /* this._toastrService.error(error);  */});
      }else{ // EDITAR
        this._marcaService.guardar(datos, datos["id"]).subscribe(
          respuesta => {
            //this._toastrService.success('La marca ha sido editada correctamente!!!');
            this.busquedaForm.patchValue({global_param: datos["nombre"]});
            this.realizarBusqueda(this.busquedaForm.value, this.configPaginacion.page);
        }, error => { /* this._toastrService.error(error); */ });
      }
    }
  }
  /**
   * borra un elemento del listado
   * @param id numero de identificador del elemento a borrar
   */
  borrar(datos: any) {
    this._marcaService.borrar(datos['id'], datos).subscribe(
      respuesta => {
        //this._toastrService.success("Se ha dado de baja la marca correctamente.");
        this.busquedaForm.patchValue({global_param: ''});
        this.realizarBusqueda({}, this.configPaginacion.page);
      }, error => { /* this._toastrService.error(error); */ });
  }

}

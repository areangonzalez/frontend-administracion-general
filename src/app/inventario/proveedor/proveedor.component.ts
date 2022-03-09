import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigurarPagina } from 'src/app/core/model';
import { ProveedorService, ConfiguracionParaPaginarService } from 'src/app/core/service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
  public busquedaForm: FormGroup;
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();
  public listado: any = [];
  public titulos: string[] = [];

  constructor(
    private _route: ActivatedRoute, private _proveedorService: ProveedorService, private _configurarPaginado: ConfiguracionParaPaginarService,
    private _fb: FormBuilder
    ) {
      this.busquedaForm = _fb.group({
        global_param: ''
      });
    }

  ngOnInit(): void {
    this.renderTabla(this._route.snapshot.data["proovedores"]);
  }
  /**
   * Aplica una busqueda con los parametros a buscar
   * @param params valores a buscar
   */
  realizarBusqueda(busqueda: any, pagina: number) {
    let params = Object.assign(busqueda, { pagesize: this.configPaginacion.pageSize, page: pagina - 1 })
    console.log(params);
    this._proveedorService.buscar(params).subscribe(
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
        this._proveedorService.guardar(datos, 0).subscribe(
          respuesta => {
            // this._toastrService.success('Se ha creado un nuevo proveedor!!!');
            this.busquedaForm.patchValue({global_param: datos["nombre"]});
            this.realizarBusqueda(this.busquedaForm.value, this.configPaginacion.page);
          }, error => { /* this._toastrService.error(error); */ });
      }else{ // EDITAR
        this._proveedorService.guardar(datos, datos["id"]).subscribe(
          respuesta => {
            // this._toastrService.success('El proveedor ha sido editado correctamente!!!');
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
  borrar(id:number) {
    this._proveedorService.borrar(id).subscribe(
      respuesta => {
        // this._toastrService.success("Se ha dado de baja al proveedor correctamente.");
        this.busquedaForm.patchValue({global_param: ''});
        this.realizarBusqueda({}, this.configPaginacion.page);
      }, error => { /* this._toastrService.error(error); */ });
  }

}

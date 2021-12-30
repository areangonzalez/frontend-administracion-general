import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/core/service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
  public listado: any = [
    { "id": 1, "nombre": "Proovedor 1" },
    { "id": 2, "nombre": "Proovedor 2" },
    { "id": 3, "nombre": "Proovedor 3" }
  ];
  public titulos: string[] = [];

  constructor(private _route: ActivatedRoute, private _proveedorService: ProveedorService) { }

  ngOnInit(): void {
    // this.renderTabla(this._route.snapshot.data["proovedores"]);
    this.renderTabla(this.listado);
  }

  realizarBusqueda(params: any) {
    console.log(params);
  }

  renderTabla(listado:any) {
    this.titulos = Object.keys(listado[0]);
    this.listado = listado;
  }

  /**
     * guardado de un elemento nuevo o editado.
     * @param datos datos a guardar
     */
   guardar(datos:any) {
    if (datos !== false){
      if (datos["id"] == 0){ // CREAR
        /* this._proveedorService.guardar(datos, 0).subscribe(
          respuesta => {
            this._toastrService.success('Se ha creado un nuevo oficio!!!');
            this.refrescarListado();
          }, error => { this._toastrService.error(error); }); */
      }else{ // EDITAR

        /* this._proveedorService.guardar(datos, datos["id"]).subscribe(
          respuesta => {
            this._toastrService.success('El oficio se ha editado correctamente!!!');
            this.refrescarListado();
        }, error => { this._toastrService.error(error); }); */
      }
    }
  }
  /**
   * refresca el listado con nuevos datos
   */
  refrescarListado() {
    /* this._proveedorService.listar().subscribe(
      respuesta => {
        this.listado = respuesta;
      }) */
  }
  /**
   * borra un elemento del listado
   * @param id numero de identificador del elemento a borrar
   */
  borrar(id:number) {
    /* this._proveedorService.borrar(id).subscribe(
      respuesta => {
        this._toastrService.success("Se ha borrado el oficio correctamente.");
        this.refrescarListado();
      }, error => { this._toastrService.error(error); }); */
  }

}

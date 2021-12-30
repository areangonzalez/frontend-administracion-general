import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/core/service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  // borrar los datos de la variable y que quede un array solo
  public listado: any = [
    { "id": 1, "nombre": "alimento/s" },
    { "id": 2, "nombre": "Bebida/s" },
    { "id": 3, "nombre": "Otros" }
  ];
  public titulos: string[] = [];

  constructor(private _route: ActivatedRoute, private _categoriaService: CategoriaService) { }

  ngOnInit(): void {
    /* Descomentar todo cuando el api funcione y borrar datos de prueba */
    // this.renderTabla(this._route.snapshot.data["categorias"]);
    this.renderTabla(this.listado); // este es necesario borrarlo
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
        /* this._categoriaService.guardar(datos, 0).subscribe(
          respuesta => {
            this._toastrService.success('Se ha creado un nuevo oficio!!!');
            this.refrescarListado();
          }, error => { this._toastrService.error(error); }); */
      }else{ // EDITAR

        /* this._categoriaService.guardar(datos, datos["id"]).subscribe(
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
    /* this._categoriaService.listar().subscribe(
      respuesta => {
        this.listado = respuesta;
      }) */
  }
  /**
   * borra un elemento del listado
   * @param id numero de identificador del elemento a borrar
   */
  borrar(id:number) {
    /* this._categoriaService.borrar(id).subscribe(
      respuesta => {
        this._toastrService.success("Se ha borrado el oficio correctamente.");
        this.refrescarListado();
      }, error => { this._toastrService.error(error); }); */
  }

}

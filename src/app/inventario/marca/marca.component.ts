import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {
  public listado: any = [
    { "id": 1, "nombre": "Ledesma" },
    { "id": 2, "nombre": "9 de oro" },
    { "id": 3, "nombre": "Knorr" }
  ];
  public titulos: string[] = [];

  constructor() { }

  ngOnInit(): void {
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
        /* this._oficioService.guardar(datos, 0).subscribe(
          respuesta => {
            this._toastrService.success('Se ha creado un nuevo oficio!!!');
            this.refrescarListado();
          }, error => { this._toastrService.error(error); }); */
      }else{ // EDITAR

        /* this._oficioService.guardar(datos, datos["id"]).subscribe(
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
    /* this._oficioService.listarOficios().subscribe(
      respuesta => {
        this.listado = respuesta;
      }) */
  }
  /**
   * borra un elemento del listado
   * @param id numero de identificador del elemento a borrar
   */
  borrar(id:number) {
    /* this._oficioService.borrar(id).subscribe(
      respuesta => {
        this._toastrService.success("Se ha borrado el oficio correctamente.");
        this.refrescarListado();
      }, error => { this._toastrService.error(error); }); */
  }

}

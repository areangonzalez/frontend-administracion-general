import { ProductoService } from 'src/app/core/service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-baja-poducto',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Dar baja Producto</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="cerrar()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <h5 class="d-flex justify-content-center">¿Está seguro que desea dar baja el producto?</h5>
  </div>
  <div class="modal-footer">
    <button class="btn btn-danger" type="button" (click)="cerrar()">No</button>&nbsp;
    <button class="btn btn-success" type="button" (click)="borrar()">Si</button>
  </div>
  `,
  styleUrls: ['./baja-poducto.component.scss']
})
export class BajaPoductoContent {
  @Input("id") public id!: number;

  constructor( public _activeModal: NgbActiveModal, private _productoService: ProductoService ) { }
  /**
   * Cierra el modal
   */
  cerrar() {
    this._activeModal.close('closed');
  }
  /**
   * Se da de baja el producto con el id
   */
  borrar() {
    if (this.id) {
      console.log("se ha dado de baja correctamente");
      this._activeModal.close('closed');
      /* this._productoService.baja(this.id).subscribe(
        resultado => {
          console.log("se ha dado de baja correctamente");
          this._activeModal.close('closed');
        }, error => { console.log(error); }); */
    }
  }

}



  @Component({
    selector: 'componente-baja-poducto',
    templateUrl: './baja-poducto.component.html',
    styleUrls: ['./baja-poducto.component.scss']
  })
  export class BajaPoductoComponent {
    @Input("idProducto") public idProducto!: number;
    @Output("obtenerConfirmacion") public obtenerConfirmacion = new EventEmitter();

    constructor( private _modalService: NgbModal ) { }
    /**
     * abre el modal
     */
    abrirModal() {
      const modalRef = this._modalService.open(BajaPoductoContent);
      modalRef.componentInstance.id = this.idProducto;
    }
  }

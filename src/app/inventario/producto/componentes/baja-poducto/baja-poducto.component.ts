import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-baja-poducto',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Dar baja Producto</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="confirmar(false)">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <h5 class="d-flex justify-content-center">¿Está seguro que desea dar baja el producto?</h5>
  </div>
  <div class="modal-footer">
    <button class="btn btn-danger" type="button" (click)="confirmar(false)">No</button>&nbsp;
    <button class="btn btn-success" type="button" (click)="confirmar(true)">Si</button>
  </div>
  `,
  styleUrls: ['./baja-poducto.component.scss']
})
export class BajaPoductoContent {

  constructor( public _activeModal: NgbActiveModal ) { }

  /**
   * Se da de baja el producto con el id
   */
  confirmar(estado: boolean) {
    if (estado) {
      console.log("se ha dado de baja correctamente");
      this._activeModal.close(true);
    } else {
      console.log("se ha cancelado la baja");
      this._activeModal.close('closed');
    }
  }
}

@Component({
  selector: 'componente-baja-poducto',
  templateUrl: './baja-poducto.component.html',
  styleUrls: ['./baja-poducto.component.scss']
})
export class BajaPoductoComponent {
  @Output("obtenerConfirmacion") public obtenerConfirmacion = new EventEmitter();

  constructor( private _modalService: NgbModal ) { }
  /**
   * abre el modal
   */
  abrirModal() {
    const modalRef = this._modalService.open(BajaPoductoContent);
    modalRef.result.then(
      (result) => {
        if (result !== 'closed') {
          this.obtenerConfirmacion.emit(true);
        } else {
          this.obtenerConfirmacion.emit(false);
        }
      }
    )
  }
}

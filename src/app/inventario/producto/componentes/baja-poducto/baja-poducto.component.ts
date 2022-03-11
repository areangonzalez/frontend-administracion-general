import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-baja-poducto',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Dar baja Producto</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="cancelar()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <h5 *ngIf="(esActivo == 1)" class="d-flex justify-content-center">¿Está seguro que desea dar baja el producto?</h5>
    <h5 *ngIf="(esActivo == 0)" class="d-flex justify-content-center">¿Está seguro que desea dar alta el producto?</h5>
  </div>
  <div class="modal-footer">
    <button class="btn btn-danger" type="button" (click)="cancelar()">No</button>&nbsp;
    <button *ngIf="(esActivo == 1)" class="btn btn-success" type="button" (click)="darBaja(true)">Si</button>
    <button *ngIf="(esActivo == 0)" class="btn btn-success" type="button" (click)="darBaja(false)">Si</button>
  </div>
  `,
  styleUrls: ['./baja-poducto.component.scss']
})
export class BajaPoductoContent {
  @Input("esActivo") public esActivo: number = 1;

  constructor( public _activeModal: NgbActiveModal ) { }

  /**
   * se da baja y alta para el producto
   * @param baja boolean
   */
  darBaja(baja: boolean) {
    if (baja) { // TRUE
      this._activeModal.close(0); // dar baja
    }else{ // FALSE
      this._activeModal.close(1); // dar alta
    }
  }

  /**
   * Se cancela el modal
   */
  cancelar() {
    this._activeModal.close('closed');
  }
}

@Component({
  selector: 'componente-baja-poducto',
  templateUrl: './baja-poducto.component.html',
  styleUrls: ['./baja-poducto.component.scss']
})
export class BajaPoductoComponent {
  @Input("esActivo") public esActivo: number = 1;
  @Output("obtenerConfirmacion") public obtenerConfirmacion = new EventEmitter();

  constructor( private _modalService: NgbModal ) { }
  /**
   * abre el modal
   */
  abrirModal() {
    const modalRef = this._modalService.open(BajaPoductoContent);
    modalRef.componentInstance.esActivo = this.esActivo;
    modalRef.result.then(
      (result) => {
        if (result !== 'closed') {
          this.obtenerConfirmacion.emit(2);
        } else {
          this.obtenerConfirmacion.emit(result);
        }
      }
    )
  }
}

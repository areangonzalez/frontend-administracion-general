import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'shared-baja-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Dar baja {{nombreTabla}}</h4>
    <button type="button" class="btn-close" (click)="activeModal.close('closed')">
    </button>
  </div>
  <div class="modal-body">
    <h5 *ngIf="(esActivo == 1)" class="d-flex justify-content-center">¿Está seguro que desea dar baja el/la {{nombreTabla}}?</h5>
    <h5 *ngIf="(esActivo == 0)" class="d-flex justify-content-center">¿Está seguro que desea dar baja el/la {{nombreTabla}}?</h5>
  </div>
  <div class="modal-footer">
    <button class="btn btn-danger" type="button" (click)="activeModal.close('closed')">No</button>&nbsp;
    <button *ngIf="(esActivo == 1)" class="btn btn-success" type="button" (click)="baja()">Si</button>
    <button *ngIf="(esActivo == 0)" class="btn btn-success" type="button" (click)="alta()">Si</button>
  </div>
  `,
  styleUrls: ['./baja-modal.component.scss']
})
export class BajaModalContent {
  @Input("nombreTabla") public nombreTabla!: string; // nombre del abm Ej.; 'Marca'
  @Input("esActivo") public esActivo: number = 1; // 1 es activo | 0 es baja

    constructor(
        //private _mensajesService: MensajesService,
        public activeModal: NgbActiveModal
    ) {}

    alta(){
      this.activeModal.close(1);
    }

    baja(){
      this.activeModal.close(0);
    }
}

@Component({
  selector: 'shared-baja-modal',
  templateUrl: './baja-modal.component.html',
  styleUrls: ['./baja-modal.component.scss']
})
export class BajaModalComponent {
  @Input("nombreTabla") public nombreTabla!: string;
  @Input("importarId") public importarId: any;
  @Input("esActivo") public esActivo: number = 1;
  @Output("obtenerConfirmacion") public obtenerConfirmacion = new EventEmitter();


  constructor(private modalService: NgbModal) { }

  open() {
      const modalRef = this.modalService.open(BajaModalContent);
      modalRef.componentInstance.nombreTabla = this.nombreTabla;
      modalRef.componentInstance.esActivo = this.esActivo;
      modalRef.result.then(
        (result) => {
          if (result == 'closed') {
            this.obtenerConfirmacion.emit(false);
          }else{
            this.obtenerConfirmacion.emit({id: this.importarId, activo: result});
          }
        }
      )
  }

}

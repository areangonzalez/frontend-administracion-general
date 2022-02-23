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
    <h5 class="d-flex justify-content-center">¿Está seguro que desea dar baja el/la {{nombreTabla}}?</h5>
  </div>
  <div class="modal-footer">
    <button class="btn btn-danger" type="button" (click)="activeModal.close('closed')">No</button>&nbsp;
    <button class="btn btn-success" type="button" (click)="borrar()">Si</button>
  </div>
  `,
  styleUrls: ['./baja-modal.component.scss']
})
export class BajaModalContent {
  @Input("nombreTabla") public nombreTabla!: string; // nombre del abm Ej.; 'Marca'

    constructor(
        //private _mensajesService: MensajesService,
        public activeModal: NgbActiveModal
    ) {}

    borrar(){
      this.activeModal.close(true);
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
  @Output("obtenerConfirmacion") public obtenerConfirmacion = new EventEmitter();


  constructor(private modalService: NgbModal) { }

  open() {
      const modalRef = this.modalService.open(BajaModalContent);
      modalRef.componentInstance.nombreTabla = this.nombreTabla;
      modalRef.result.then(
        (result) => {
          if (result == 'closed') {
            this.obtenerConfirmacion.emit(false);
          }else{
            this.obtenerConfirmacion.emit(this.importarId);
          }
        }
      )
  }

}

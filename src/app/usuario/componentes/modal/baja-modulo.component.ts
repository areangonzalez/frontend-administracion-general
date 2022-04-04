import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurarListas } from 'src/app/core/model';


@Component({
  selector: 'content-baja-modulo-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Dar baja módulo</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.close('closed')">
      </button>
    </div>
    <div class="modal-body">
      ¿Está seguro que quiere dar de baja al usuario de este Módulo?
    </div>
    <div class="modal-footer d-flex justify-content-beetwend">
      <button class="btn btn-danger" type="button" (click)="cerrarModal(false)" ><i class="fa-solid fa-ban"></i> No</button>
      <button class="btn btn-danger" type="button" (click)="cerrarModal(true)" ><<i class="fa-solid fa-check"></i> Si</button>
    </div>
  `,
  styleUrls: ['./baja-modulo.component.scss']
})
export class BajaModuloContent {

  constructor(public activeModal: NgbActiveModal) {}

  cerrarModal(cancelar: boolean) {
    this.activeModal.close((!cancelar) ? 'closed' : true);
  }

}

@Component({
  selector: 'componente-baja-modulo-modal',
  templateUrl: './baja-modulo.component.html',
  styleUrls: ['./baja-modulo.component.scss']
})
export class BajaModuloComponent {
   @Output("confirmarBajaModulo") public confirmarBajaModulo = new EventEmitter;

   constructor(
     private modalService: NgbModal, private config: NgbModalConfig, /* private _msj: AlertService, */
   ) {
     config.backdrop = 'static';
     config.keyboard = false;
   }

   abrirModal() {
     const modalRef = this.modalService.open(BajaModuloContent);
     modalRef.result.then(
       (result) => {
           if (result == 'closed'){
           }else{
             // obtengo el resultado de la operacion y reseteo el listado a la pagina 1.
             return this.confirmarBajaModulo.emit(result);
           }
       }
     )
   }

}

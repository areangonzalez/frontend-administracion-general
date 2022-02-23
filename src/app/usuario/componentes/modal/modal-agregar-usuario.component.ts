import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
/* import { AlertService } from './../../../core/service';
import { ConfiguracionListados } from './../../../core/model'; */

@Component({
  selector: 'content-modal-agregar-usuario',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Agregar Usuario</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.close('closed')">
      </button>
    </div>
    <div class="modal-body">
      <componente-form-persona-usuario [localidades]="localidades" [roles]="roles" (cancelarForm)="cancelarModal($event)" ></componente-form-persona-usuario>
    </div>
  `,
  styleUrls: ['./modal-agregar-usuario.component.scss']
})
export class ModalAgregarUsuarioContent {
  @Input("localidades") public localidades:any;
  @Input("roles") public roles:any;
  constructor(public activeModal: NgbActiveModal) {}

  cancelarModal(cancelar: boolean) {
    this.activeModal.close((cancelar) ? 'closed' : 1);
  }
}

@Component({
  selector: 'componente-modal-agregar-usuario',
  templateUrl: './modal-agregar-usuario.component.html',
  styleUrls: ['./modal-agregar-usuario.component.scss']
})
export class ModalAgregarUsuarioComponent {
  /**
   * @var usuarioid {number} identificador de un usuario
   * @var listas {object} objeto que contiene listados
   */
  @Input("usuarioid") public usuarioid: number | any;
  /* @Input("listas") public listas: ConfiguracionListados; */
  @Output("confirmarGuardado") public confirmarGuardado = new EventEmitter;

  constructor(
    private modalService: NgbModal, private config: NgbModalConfig, /* private _msj: AlertService, */
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  abrirModal() {
    const modalRef = this.modalService.open(ModalAgregarUsuarioContent);
    /* modalRef.componentInstance.localidades = this.listas.localidades;
    modalRef.componentInstance.roles = this.listas.roles; */
    modalRef.result.then(
      (result) => {
          if (result == 'closed'){
          }else{
            // obtengo el resultado de la operacion y reseteo el listado a la pagina 1.
            return this.confirmarGuardado.emit(result);
          }
      }
    )
  }
}


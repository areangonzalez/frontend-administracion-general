import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-confirmar-borrar-permiso-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirmar Borrado de Permisos</h4>
      <button type="button" class="close" aria-label="Close" (click)="cerrarModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>¿Está seguro que desea borrar {{ (this.texto !== '') ? this.texto : "los permisos del usuario"}}?</p>
    </div>
    <div class=modal-footer>
    <button type="button" class="btn btn-danger" (click)="confirmar(false)"><span class="oi oi-ban" title="Cancelar" aria-hidden="true"></span> No</button>
    <button type="button" class="btn btn-success" (click)="confirmar(true)"><i class="fa fa-arrow-down"></i> Si</button>
    </div>
  `,
})
export class ConfirmarBorradoPermisoContent {
  @Input("texto") public texto: string = '';
  constructor(public _activeModal: NgbActiveModal) {}

  confirmar(confirmacion: boolean) {
    this._activeModal.close(confirmacion);
  }

  cerrarModal() {
    this._activeModal.dismiss('closed');
  }

}
@Component({
  selector: 'componente-confirmar-borrar-permiso-modal',
  templateUrl: './confirmar-borrado-permiso.component.html',
  styleUrls: ['./confirmar-borrado-permiso.component.scss']
})
export class ConfirmarBorradoPermisoComponent {
  @Input("texto") public texto: string = '';
  @Output("confirmarBorrado") public confirmarBorrado = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  abrirModal() {
    const modalRef = this.modalService.open(ConfirmarBorradoPermisoContent, {  centered: true });
    modalRef.componentInstance.texto = this.texto;
    modalRef.result.then(
      (result) => {
        if (result == 'closed'){
        }else{
          // obtengo el resultado de la operacion.
          return this.confirmarBorrado.emit(result);
        }
      }
    )
  }

}

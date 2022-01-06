import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-localidad-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{titulo}} Localidad</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="cerrarModal()"></button>
    </div>
    <div class="modal-body">
      <componente-localidad-form [localidad]="localidad" [provincias]="provincias" (cancelarForm)="confirmar($event)"></componente-localidad-form>
      <!-- <admin-localidad-form [localidad]="localidad" [provincias]="provincias" (cancelarForm)="confirmar($event)"></admin-localidad-form> -->
    </div>
  `,
  styleUrls: ['./localidad-modal.component.scss']
})
export class LocalidadModalContent {
  @Input("provincias") public provincias: any; // array que contiene el/los listados para el componente
  @Input("localidad") public localidad?: any;
  @Input("titulo") public titulo!: string;

  constructor(public _activeModal: NgbActiveModal) { }

  public cerrarModal() {
    this._activeModal.close('closed');
  }
  /**
   * confirma el guardado de una localidad
   * @param confirmacion puede ser false o venir con el nombre de la localidad agregada o editada
   */
  public confirmar(confirmacion: any) {
    if (confirmacion !== false) {
      this._activeModal.close(confirmacion);
    }else {
      this._activeModal.close('close');
    }
  }
}

@Component({
  selector: 'componente-localidad-modal',
  templateUrl: './localidad-modal.component.html',
  styleUrls: ['./localidad-modal.component.scss']
})
export class LocalidadModalComponent {
  @Input("provincias") public provincias: any; // array que contiene el/los listados para el componente
  @Input("localidad") public localidad?: any;
  @Input("titulo") public titulo!: string;
  @Output("confirmarRegistro") public confirmarRegistro = new EventEmitter();

  constructor(private _modalService: NgbModal, private _config: NgbModalConfig, /* private _msj: NotificacionService */ )
  {
    _config.backdrop = 'static';
    _config.keyboard = false;
  }

  abrirModal() {
    const modalRef = this._modalService.open(LocalidadModalContent);
    modalRef.componentInstance.provincias = this.provincias;
    modalRef.componentInstance.localidad = this.localidad;
    modalRef.componentInstance.titulo = this.titulo;
    modalRef.result.then(
      (result) => {
        if (result == 'closed'){
        }else{
          // obtengo el resultado de la operacion.
          return this.confirmarRegistro.emit({confirma: true, nombreLocalidad: result});
        }
      }
    )
  }
}

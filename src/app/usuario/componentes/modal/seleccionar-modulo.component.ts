import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-seleccionar-modulo-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Agregar Usuario</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.close('closed')">
      </button>
    </div>
    <div class="modal-body">
      <componente-permisos-gcb></componente-permisos-gcb>
    </div>
  `,
  styleUrls: ['./seleccionar-modulo.component.scss']
})
export class SeleccionarModuloContent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}

@Component({
  selector: 'componente-seleccionar-modulo-modal',
  templateUrl: './seleccionar-modulo.component.html',
  styleUrls: ['./seleccionar-modulo.component.scss']
})
export class SeleccionarModuloComponent {
  /**
   * @var usuarioid {number} identificador de un usuario
   * @var listas {object} objeto que contiene listados
   */
   @Input("usuarioid") public usuarioid: number | any;
   /* @Input("listas") public listas: ConfiguracionListados; */

   constructor(
     private modalService: NgbModal, private config: NgbModalConfig, /* private _msj: AlertService, */
   ) {
     config.backdrop = 'static';
     config.keyboard = false;
   }

   abrirModal() {
     const modalRef = this.modalService.open(SeleccionarModuloContent);
     /* modalRef.componentInstance.localidades = this.listas.localidades;
     modalRef.componentInstance.roles = this.listas.roles; */
   }

}

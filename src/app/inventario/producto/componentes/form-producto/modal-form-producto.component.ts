import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-modal-form-producto',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">{{titulo}}</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="cancelar()">
    </button>
  </div>
  <div class="modal-body">
    <componente-form-producto></componente-form-producto>
  </div>
`,
  styleUrls: ['./modal-form-producto.component.scss']
})
export class ModalFormProductoContent {
  @Input("titulo") public titulo!: string;

  constructor( public activeModal: NgbActiveModal ) { }
  /**
   * Cierra el formulario
   */
  cancelar() {
      this.activeModal.close('closed');
  }
  /**
   * Obtiene el guardado del formulario
   * @param datos
   */
  obtenerDatos(datos:any){
    this.activeModal.close(datos);
  }
}

@Component({
  selector: 'componente-modal-form-producto',
  templateUrl: './modal-form-producto.component.html',
  styleUrls: ['./modal-form-producto.component.scss']
})
export class ModalFormProductoComponent {
  @Input("titulo") public titulo!: string; // titulo de ser un string para el titulo representativo del modal
  @Input("tipo") public tipo: any; // tipo string agregar/editar
  @Input("datosProducto") public datosProducto: any;
  @Output("obtenerDatos") public obtenerDatos = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  abrirModal() {
    const modalRef = this.modalService.open(ModalFormProductoContent);
    modalRef.componentInstance.titulo = this.titulo;
    modalRef.componentInstance.datosProducto = this.datosProducto;
    modalRef.result.then(
      (result) => {
        if (result == 'closed') {
          this.obtenerDatos.emit(false);
        }else{
          this.obtenerDatos.emit(result);
        }
      }
    );

  }

}

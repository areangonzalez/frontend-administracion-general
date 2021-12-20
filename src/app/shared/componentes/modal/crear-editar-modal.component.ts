import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'shared-crear-editar-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Agregar {{titulo}}</h4>
    <button type="button" class="close bg-light " aria-label="Close" (click)="cancelar(true)">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <shared-form-personalizado [armarForm]="armarForm" (cancelarForm)="cancelar($event)" [importarDatos]="importarDatos" (obtenerDatos)="obtenerDatos($event)"></shared-form-personalizado>
  </div>
`,
  styleUrls: ['./crear-editar-modal.component.scss']
})
@Injectable()
export class CrearEditarModalContent implements OnInit {
  @Input("titulo") public titulo: any;
  @Input("tipo") public tipo: any; // tipo agregar/modificar
  @Input('importarDatos') public importarDatos: any;
  @Input('armarForm') public armarForm: any;

  constructor(
      public activeModal: NgbActiveModal
  ) {

  }

  ngOnInit(): void {
  }

  cancelar(cancela:boolean){
    this.activeModal.close('closed');
  }

  obtenerDatos(datos:any){
    this.activeModal.close(datos);
  }
}

@Component({
  selector: 'shared-crear-editar-modal',
  templateUrl: './crear-editar-modal.component.html',
})
@Injectable()
export class CrearEditarModalComponent {
  @Input("titulo") public titulo: any; // titulo de ser un string para el titulo representativo del modal
  @Input("tipo") public tipo: any; // tipo string agregar/editar
  @Input("importarDatos") public importarDatos: any;
  @Input("armarForm") public armarForm: any;
  @Output("obtenerDatos") public obtenerDatos = new EventEmitter();


  constructor(private modalService: NgbModal) { }

  open() {
      const modalRef = this.modalService.open(CrearEditarModalContent, { size: 'sm' });
      modalRef.componentInstance.titulo = this.titulo;
      modalRef.componentInstance.tipo = this.tipo;
      modalRef.componentInstance.importarDatos = this.importarDatos;
      modalRef.componentInstance.armarForm = this.armarForm;
      modalRef.result.then(
        (result) => {
          if (result == 'closed') {
            this.obtenerDatos.emit(false);
          }else{
            this.obtenerDatos.emit(result);
          }
        }
      )
  }
}

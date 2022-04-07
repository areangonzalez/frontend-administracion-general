import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { map } from 'rxjs/operators';
import { UsuarioService, NotificacionService } from 'src/app/core/service';

@Component({
  selector: 'content-configurar-usuario-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Configurar Usuario</h4>
      <button type="button" class="close" aria-label="Close" (click)="cancelar()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <componente-usuario-tab [datosUsuario]="datosUsuario" [configListas]="listados" (actualizarLista)="actualizar($event)" ></componente-usuario-tab>
    </div>
  `,
  styleUrls: ['./configurar-usuario.component.scss']
})
export class ConfigurarUsuarioContent {
  @Input("listados") public listados: any;
  @Input("datosUsuario") public datosUsuario: any;

  constructor( public activeModal: NgbActiveModal ) {
  }

  cancelar() {
    this.activeModal.close('closed');
  }

  actualizar(confirmacion: boolean) {
    this.activeModal.close(confirmacion);
  }
}

@Component({
  selector: 'componente-configurar-usuario-modal',
  templateUrl: './configurar-usuario.component.html',
  styleUrls: ['./configurar-usuario.component.scss']
})
export class ConfigurarUsuarioComponent {
  @Input("listasConfig") public listasConfig: any;
  @Input("usuarioid") public usuarioid: any;
  @Output("actualizarListado") public actualizarListado = new EventEmitter();
  public modalNumber = 0;

  constructor(
    private modalService: NgbModal, private _msj: NotificacionService, private config: NgbModalConfig,
    private _usuarioService: UsuarioService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

  }

  abrirModal(datosUsuario: any) {
    let modalRef: NgbModalRef;
    modalRef = this.modalService.open(ConfigurarUsuarioContent, { size: 'lg' });
    modalRef.componentInstance.listados = this.listasConfig;
    modalRef.componentInstance.datosUsuario = datosUsuario;
    modalRef.result.then(
      result => {
        if (result !== 'closed') {
          this.actualizarListado.emit(true);
        }
      }
    )
  }

  configurarModal() {
    // pido usuario por api
    this._usuarioService.buscarPorId(this.usuarioid)
    .pipe(map((vDatos: any) => {
      let vUsuario: any = {
        id: vDatos['personaid'],
        nombre: vDatos['nombre'],
        apellido: vDatos['apellido'],
        cuil: vDatos['cuil'],
        nro_documento: vDatos['nro_documento'],
        usuario: {
          id: vDatos['id'],
          personaid: vDatos['personaid'],
          username: vDatos['username'],
          rol: vDatos['rol'],
          email: vDatos['email'],
          localidad: vDatos['localidad'],
          localidadid: vDatos['localidadid'],
          created_at: vDatos['created_at'],
          fecha_baja: vDatos['fecha_baja'],
          baja: (vDatos['fecha_baja']) ? true : false,
          descripcion_baja: vDatos['descripcion_baja']
        }
      };
      return vUsuario;
    })).subscribe(
      (datos: any) => { this.abrirModal(datos); },
      (error: any) => { this._msj.showDanger(error)}
    );
  }
}
/**
 * BAJA DE MODULO
 */
@Component({
  selector: 'content-baja-modulo-modal',
  templateUrl: './baja-modulo.component.html',
  styleUrls: ['./baja-modulo.component.scss']
})
export class BajaModuloContent {

  constructor( public activeModal: NgbActiveModal ) {

  }

  cerrarModal(cancelar: boolean) {
    this.activeModal.close((!cancelar) ? 'closed' : true);
  }
}

@Component({
  selector: 'componente-baja-modulo-modal',
  template: ``,
  styleUrls: ['./baja-modulo.component.scss']
})
export class BajaModuloComponent {
  @Input("moduloForm") public moduloForm!: FormGroup;
  @Output("confirmarBajaModulo") public confirmarBajaModulo = new EventEmitter();

  constructor(
    private modalService: NgbModal, private config: NgbModalConfig, public activeModal: NgbActiveModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  /* public validarSeleccionModulo() {
    console.log(this.moduloForm.invalid);
    if (this.moduloForm.invalid) {
      this.activeModal.close('invalid');
    }else{
      this.abrirModal()
    }
  } */

  abrirModal() {
    const modalRef = this.modalService.open(BajaModuloContent);
    modalRef.result.then(
      (result) => {
        console.log(result);
          if (result == 'closed'){
          }else{

            // obtengo el resultado de la operacion y reseteo el listado a la pagina 1.
            return this.confirmarBajaModulo.emit(result);
          }
      }
    )
  }

}

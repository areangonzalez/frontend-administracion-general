import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { UsuarioService, NotificacionService, UtilService } from 'src/app/core/service';
import { ConfigurarListas } from 'src/app/core/model';
import { BajaModuloContent } from '../modal';

@Component({
  selector: 'componente-usuario-tab',
  templateUrl: './usuario-tab.component.html',
  styleUrls: ['./usuario-tab.component.scss']
})
export class UsuarioTabComponent {
  @Input("datosUsuario") public datosUsuario: any;
  @Input("configListas") configListas: ConfigurarListas = {};
  @Output("actualizarLista") public actualizarLista = new EventEmitter();
  public usuarioBaja: boolean = false;
  public moduloForm: FormGroup;
  public submitted: boolean = false;

  constructor( private _fb: FormBuilder, private _usuarioService: UsuarioService, private _msj: NotificacionService, private _util: UtilService, private modalService: NgbModal ) {
    this.moduloForm = _fb.group({
      moduloid: ['', [Validators.required]]
    });
  }

  public actualizarDatos(confirmar: boolean) {
    if (!confirmar) {
      this.buscarPorId(this.datosUsuario.usuario.id);
      this.actualizarLista.emit(true);
    }
  }

  public buscarPorId(idUsuario: number) {
    this._usuarioService.buscarPorId(idUsuario)
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
      (datos: any) => {
        this. datosUsuario = datos;
      },
      (error: any) => { this._msj.showDanger(error)}
    );
  }

  public validarSeleccionModulo(idUsuario: number) {
    this.submitted = true;
    if (this.moduloForm.invalid) {
      return;
    }else{
      this.abrirModal(idUsuario)
    }
  }

  abrirModal(idUsuario: number) {
    let modalRef: NgbModalRef
    modalRef = this.modalService.open(BajaModuloContent);
    modalRef.result.then(
      (result) => {
          if (result == 'closed'){
          }else{
            // obtengo el resultado de la operacion y reseteo el listado a la pagina 1.
            return this.confirmarBajaModulo(result, idUsuario);
          }
      }
    )
  }

  public confirmarBajaModulo(confirmacion: boolean, idUsuario: number) {
    let params: any = {};
    let moduloid = this.moduloForm.get("moduloid")?.value;
    if (confirmacion && (moduloid && moduloid != "")) {
      params["usuarioid"] = idUsuario;
      params["moduloid"] = moduloid;
      params["modulo"] = this._util.buscarDatosPorId(this.configListas.modulos, moduloid);

      console.log(params);

    }
  }

}

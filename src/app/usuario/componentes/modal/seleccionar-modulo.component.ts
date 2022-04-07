import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurarListas } from 'src/app/core/model';
import { NotificacionService, UtilService, UsuarioService } from 'src/app/core/service';

@Component({
  selector: 'content-seleccionar-modulo-modal',
  templateUrl: './seleccionar-modulo.content.html',
  styleUrls: ['./seleccionar-modulo.component.scss'],
  providers: [FormBuilder]
})
export class SeleccionarModuloContent implements OnInit {
  @Input("idUsuario") public idUsuario: number | any;
  @Input("listadosArray") public listadosArray!: ConfigurarListas;
  public formRolPermisos: FormGroup;
  public submitted: boolean = false;
  public tipoModulo: string = '';

  constructor(
    public activeModal: NgbActiveModal, private _fb: FormBuilder, private _util: UtilService, private _usuarioService: UsuarioService,
    private _msj: NotificacionService
  ) {
    this.formRolPermisos = _fb.group({
      modulo: ['', [Validators.required]],
      rol: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  cancelar(cancelo: any) {
    this.activeModal.close('closed');
  }

  validarDatos(params: any) {
    let error: boolean = false;
    this.submitted = true;
    if (!this.formRolPermisos.valid) {
      error = true;
      return;
    }
    if (!error) {
      let modulo = this._util.buscarDatosPorId(this.listadosArray.modulos, this.formRolPermisos.get("modulo")?.value);
      params["usuarioid"] = this.idUsuario;
      params["moduloid"] = this.formRolPermisos.get("modulo")?.value;
      params["rol"] = this.formRolPermisos.get("rol")?.value;
      params["servicio"] = modulo.servicio;

      this.guardar(params);
    }
  }

  guardar(params: any) {
    this._usuarioService.crearAsignacion(params).subscribe(
      respuesta => {
        console.log(respuesta);

    }, error => { console.log(error);
     });
  }

  obtenerTipomodulo(modulo: any) {
    let moduloObj: any;
    if (modulo.value !== '') {
      moduloObj = this._util.buscarDatosPorId(this.listadosArray.modulos, modulo.value)
      this.tipoModulo = moduloObj.sigla;
    } else {
      this.tipoModulo = '';
    }
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
   @Input("listadosArray") public listadosArray!: ConfigurarListas;
   /* @Input("listas") public listas: ConfiguracionListados; */

   constructor(
     private modalService: NgbModal, private config: NgbModalConfig, /* private _msj: AlertService, */
   ) {
     config.backdrop = 'static';
     config.keyboard = false;
   }

   abrirModal() {
     const modalRef = this.modalService.open(SeleccionarModuloContent);
     modalRef.componentInstance.idUsuario = this.usuarioid;
     modalRef.componentInstance.listadosArray = this.listadosArray;
     /* modalRef.componentInstance.localidades = this.listas.localidades;
     modalRef.componentInstance.roles = this.listas.roles; */
   }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-seleccionar-modulo-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Selección de Permisos del Usuario</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.close('closed')">
      </button>
    </div>
    <div class="modal-body">
      <div class="row">
        <fieldset class="padding-custom" [formGroup]="formRolPermisos" >
          <div class="form-group col-md-12">
            <label for="rol" class="prioridad">Rol:</label>
            <select class="form-select" id="rol" formControlName="rol">
              <option value="">Seleccione un Rol</option>
              <option *ngFor="let rol of listaRoles" value="{{rol.name}}">{{rol.name}}</option>
            </select>
            <div *ngIf="(formRolPermisos.get('rol')?.invalid && submitted)"
            class="text-danger">
              <div *ngIf="formRolPermisos.get('rol')?.hasError('required')">Este campo es requerido. </div>
            </div>
          </div>
          <div class="form-group col-md-12">
            <label for="modulo" class="prioridad">Modulo:</label>
            <select class="form-select" id="modulo" formControlName="modulo">
              <option value="">Seleccione un Módulo</option>
              <option *ngFor="let modulo of listaModulos" value="{{modulo.id}}">{{modulo.nombre}}</option>
            </select>
            <div *ngIf="(formRolPermisos.get('modulo')?.invalid && submitted)"
            class="text-danger">
              <div *ngIf="formRolPermisos.get('modulo')?.hasError('required')">Este campo es requerido. </div>
            </div>
          </div>
        </fieldset>
      </div>
      <!-- <componente-permisos-gcb [submitted]="submitted" [idUsuario]="idUsuario" (cancelarForm)="cancelar($event)" (obtenerPermisos)="validarDatos($event)" ></componente-permisos-gcb> -->
      <!-- <componente-permisos-inventario [idUsuario]="idUsuario" (cancelarForm)="cancelar($event)" (obtenerPermisos)="validarDatos($event)"></componente-permisos-inventario> -->
      <componente-permisos-prestaciones-sociales [idUsuario]="idUsuario" (cancelarForm)="cancelar($event)" (obtenerPermisos)="validarDatos($event)"></componente-permisos-prestaciones-sociales>
    </div>
  `,
  styleUrls: ['./seleccionar-modulo.component.scss'],
  providers: [FormBuilder]
})
export class SeleccionarModuloContent implements OnInit {
  @Input("idUsuario") public idUsuario: number | any;
  public formRolPermisos: FormGroup;
  public submitted: boolean = false;

  /* borrar ejemlos */
  public listaRoles: any = [{name: "usuario"}, {name: "soporte"}];
  public listaModulos: any = [{id: 1, nombre: "Gestor Bancario"}, {id: 2, nombre: "Inventario"}]

  constructor(public activeModal: NgbActiveModal, private _fb: FormBuilder) {
    this.formRolPermisos = _fb.group({
      rol: ['', [Validators.required]],
      modulo: ['', [Validators.required]]
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
      console.log("entra");

      error = true;
      return;
    }

    console.log(error);

    if (!error) {
      params["moduloid"] = this.formRolPermisos.get("modulo")?.value;
      params["rol"] = this.formRolPermisos.get("rol")?.value;
      console.log(params)
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
     /* modalRef.componentInstance.localidades = this.listas.localidades;
     modalRef.componentInstance.roles = this.listas.roles; */
   }

}

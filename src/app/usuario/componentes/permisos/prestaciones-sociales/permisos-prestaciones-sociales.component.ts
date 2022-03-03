import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'componente-permisos-prestaciones-sociales',
  templateUrl: './permisos-prestaciones-sociales.component.html',
  styleUrls: ['./permisos-prestaciones-sociales.component.scss'],
  providers: [FormBuilder]
})
export class PermisosPrestacionesSocialesComponent implements OnInit {
  @Input("idUsuario") public idUsuario: number | any;
  @Input("listaProgramas") public listaProgramas: any;
  /* @Input("listaPermisos") public listaPermisos: any; */ public listaPermisos: any = [{name:"agregar"}, {name:"borrar"}];
  @Input("baja") public baja: boolean = false;
  @Output("obtenerPermisos") public obtenerPermisos = new EventEmitter();
  @Output("cancelarForm") public cancelarForm = new EventEmitter();
  public submitted: boolean = false;
  public permisosForm: FormGroup;
  public listaProgramaPermisos: any = [];
  public permisosSeleccionados: any = [];

  constructor(private _fb: FormBuilder,/*  private _msj: MensajesService, private _soporteService: SoporteService */) {
    this.permisosForm = _fb.group({
      programaid: ["", [Validators.required]]
    });

  }

  ngOnInit() {
    if (this.idUsuario) {
      this.obtenerListaProgramaPermisos(this.idUsuario);
    }
  }

  obtenerListaProgramaPermisos(idUsuario: number) {
    /* this._soporteService.listarAsignacion(idUsuario).subscribe(
      listado => {
        this.listaProgramaPermisos = listado;
      }, error => { this._msj.cancelado(error, [{name:""}]); }
    ) */
  }

  setPermisosDefault(programaid: any) {
    this.permisosSeleccionados = (programaid.value != "") ? [{ name: "prestacion_ver" }] : [];
  }

  validarDatos() {
    this.submitted = true;
    if (this.permisosForm?.invalid && (this.permisosSeleccionados.length !== 0)) {
      return;
    }else{
      let params: any = this.permisosForm?.value;
      params["usuarioid"] = this.idUsuario;
      params["lista_permiso"] = this.permisosSeleccionados;

      this.guardar(params)
    }
  }

  guardar(params: any) {
    params["usuarioid"] = this.idUsuario;
    this.obtenerPermisos.emit(params);
    /* this._soporteService.asignarPermisos(params).subscribe(
      respuesta => {
        this._msj.exitoso("Se han agregado correctamente el programa y los permisos al usuario.", [{name:""}]);
        this.obtenerListaProgramaPermisos(this.idUsuario);
      }, error => { this._msj.cancelado(error, [{name: ""}]); }
    ); */
  }
  cancelar(){
    this.cancelarForm.emit(true);
  }
}

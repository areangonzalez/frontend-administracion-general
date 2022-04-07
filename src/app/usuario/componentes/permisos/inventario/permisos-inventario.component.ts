import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-permisos-inventario',
  templateUrl: './permisos-inventario.component.html',
  styleUrls: ['./permisos-inventario.component.scss']
})
export class PermisosInventarioComponent implements OnInit {
  @Input("idUsuario") public idUsuario: number | any;
  /* @Input("listaPermisos") public listaPermisos: any; */ public listaPermisos: any = [{name: "comprobante_crear"}, {name: "borrar"}, {name: "editar"}];
  @Input("baja") public baja: boolean = false;
  @Output("obtenerPermisos") public obtenerPermisos = new EventEmitter();
  @Output("cancelarForm") public cancelarForm = new EventEmitter();
  public listaUsuarioPermisos: any = {lista_permiso: []};
  public permisosSeleccionados: any = [];
  public permisosSeleccionadosEdit: any = [];
  public submitted: boolean = false;
  public editado: boolean = false;

  constructor() {}
  /* constructor(private _msj: AlertService, private _usuarioService: UsuarioService) {} */

  ngOnInit() {
    if (this.idUsuario) {
      this.obtenerListaPermisos(this.idUsuario);
    }
  }
  /**
   * Obtiene el listado de roles con sus permisos del usuario
   * @param idUsuario identificador del usuario
   */
  obtenerListaPermisos(idUsuario: number) {
    /* this._usuarioService.listarAsignacion(idUsuario).subscribe(
      respuesta => {
        // guardo el listado con roles y sus permisos
        this.listaUsuarioPermisos = respuesta;
      }, error => { this._msj.cancelado(error); }
    ) */
  }
  /**
   * Valido los datos antes de asignar los permisos
   */
  validarDatos() {
    this.submitted = true;
    let permisos: any = [];
    if (this.permisosSeleccionados.length == 0) {
      /* this._msj.cancelado("No se ha seleccionado ningun permiso."); */
      return;
    }else{
      // si es un editado armo el array que se debe guardar
      if (this.editado) {
        for (const key in this.permisosSeleccionados) {
          if (this.permisosSeleccionados[key].name == undefined) {
            permisos.push({name: this.permisosSeleccionados[key]});
          }else{
            this.editado = false;
          }
        }
      }

      let params: any  = {
        usuarioid: this.idUsuario,
        lista_permiso: (this.editado) ? permisos : this.permisosSeleccionados
      };

      this.guardar(params)
    }
  }
  /**
   * se asignan los permisos al usuario
   * @param params listado de permisos con el id del usuario
   */
  guardar(params: any) {
    params["usuarioid"] = this.idUsuario;
    this.obtenerPermisos.emit(params);
    /* this._usuarioService.asignarPermisos(params).subscribe(
      respuesta => {
        this._msj.exitoso("Se han agregado correctamente el convenio y los permisos al usuario.");
        this.obtenerListaPermisos(this.idUsuario);
        this.limpiarDatos();
        this.editado = false;
      }, error => { this._msj.cancelado(error); }
    ); */
  }
  /**
   * Se editan los permisos dinamicamente
   * @param permisos los datos del ususario con convenio y permisos
   */
  editarPermisos(permisos: any){
    console.log(permisos);

    this.permisosSeleccionados = permisos;
    this.editado = true;
  }
  /**
   * se limpia el formulario y listado
   */
  limpiarDatos() {
    this.permisosSeleccionados = [];
  }

  cancelar() {
    this.cancelarForm.emit(true);
  }
}

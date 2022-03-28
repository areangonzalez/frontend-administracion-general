import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UsuarioService, NotificacionService } from 'src/app/core/service';

@Component({
  selector: 'componente-usuario-tab',
  templateUrl: './usuario-tab.component.html',
  styleUrls: ['./usuario-tab.component.scss']
})
export class UsuarioTabComponent implements OnInit {
  @Input("datosUsuario") public datosUsuario: any;
  @Input("configListas") configListas: any;
  @Output("actualizarLista") public actualizarLista = new EventEmitter();
  public usuarioBaja: boolean = false;

  constructor(private _usuarioService: UsuarioService, private _msj: NotificacionService) { }

  ngOnInit() {
    // this.prepararFormulario(this.datosUsuario);
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

  // /**
  //  * Checkea la comparacion de las contraseñas para validar
  //  * @param group formulario que contiene los valores a comparar
  //  */
  //  checkPasswords(group: AbstractControl) { // here we have the 'passwords' group
  //   const password: string = group.get('password')?.value;
  //   const confirmPassword: string = group.get('confirmPass')?.value;

  //   if ( password !== confirmPassword ) {
  //     group.get('confirmPass')?.setErrors({ NoPassswordMatch: true });
  //   }
  // }
  // /**
  //  * Completa el formulario del usuario
  //  * @param datos datos del usuario
  //  */
  // public prepararFormulario(datos: any){
  //   this.usuario.patchValue(datos['usuario']);
  //   this.idUsuario = datos['usuario']['id'];
  //   this.usuarioBaja = datos['usuario']['baja'];
  // }

  // /**
  //  * funcion que valida el formulario y el cambio de contraseña
  //  */
  // public cambiarPass() {
  //   this.submitted = true;
  //   if (this.usuario.invalid) {
  //     this._msj.showDanger("¡Campos sin completar!");
  //     return;
  //   } else {
  //     let datos = this.usuario.value;

  //     this.cambiarDatosUsuario(datos, this.idUsuario);
  //   }
  // }
  // private cambiarDatosUsuario(datos: object, id: number) {
  //   this._usuarioService.guardar(datos, id).subscribe(
  //     respuesta => {
  //       this._msj.showSuccess("Los datos del usuario han sido actualizados correctamente.");
  //       this.usuario.patchValue({"password": ""});
  //       this.usuario.patchValue({"confirmPass": ""});
  //     }, error => { this._msj.showDanger(error); }
  //   );
  // }
}

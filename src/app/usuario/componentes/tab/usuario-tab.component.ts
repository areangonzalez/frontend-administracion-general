import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService, NotificacionService } from 'src/app/core/service';

@Component({
  selector: 'componente-usuario-tab',
  templateUrl: './usuario-tab.component.html',
  styleUrls: ['./usuario-tab.component.scss']
})
export class UsuarioTabComponent implements OnInit {
  @Input("datosUsuario") public datosUsuario: any;
  @Input("configListas") configListas: any;
  public usuario: FormGroup;
  public submitted: boolean = false;
  public usuarioBaja: boolean = false;
  private idUsuario!: number;

  constructor(private _fb: FormBuilder, private _usuarioService: UsuarioService, private _msj: NotificacionService) {
    this.usuario = _fb.group({
        personaid: '',
        rol: [{value: '', disabled: true}],
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        localidadid: '',
        moduloid: [{value: '', disabled: true}],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPass: ['', [Validators.required]]
      }, { validators:  this.checkPasswords })
  }

  ngOnInit() {
    this.prepararFormulario(this.datosUsuario);
  }

  /**
   * Checkea la comparacion de las contraseñas para validar
   * @param group formulario que contiene los valores a comparar
   */
   checkPasswords(group: AbstractControl) { // here we have the 'passwords' group
    const password: string = group.get('password')?.value;
    const confirmPassword: string = group.get('confirmPass')?.value;

    if ( password !== confirmPassword ) {
      group.get('confirmPass')?.setErrors({ NoPassswordMatch: true });
    }
  }
  /**
   * Completa el formulario del usuario
   * @param datos datos del usuario
   */
  public prepararFormulario(datos: any){
    this.usuario.patchValue(datos['usuario']);
    this.idUsuario = datos['usuario']['id'];
    this.usuarioBaja = datos['usuario']['baja'];
  }

  /**
   * funcion que valida el formulario y el cambio de contraseña
   */
  public cambiarPass() {
    this.submitted = true;
    if (this.usuario.invalid) {
      this._msj.showDanger("¡Campos sin completar!");
      return;
    } else {
      let datos = this.usuario.value;

      this.cambiarDatosUsuario(datos, this.idUsuario);
    }
  }
  private cambiarDatosUsuario(datos: object, id: number) {
    this._usuarioService.guardar(datos, id).subscribe(
      respuesta => {
        this._msj.showSuccess("Los datos del usuario han sido actualizados correctamente.");
        this.usuario.patchValue({"password": ""});
        this.usuario.patchValue({"confirmPass": ""});
      }, error => { this._msj.showDanger(error); }
    );
  }
}

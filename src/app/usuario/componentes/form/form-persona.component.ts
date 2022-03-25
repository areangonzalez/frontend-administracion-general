import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ConfigurarListas } from 'src/app/core/model';
import { UsuarioService, UtilService, NotificacionService } from './../../../core/service';

@Component({
  selector: 'componente-form-persona-usuario',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss'],
  providers: [FormBuilder]
})
export class FormPersonaComponent implements OnInit {
  @Input("listasArray") public listasArray: ConfigurarListas | any;
  @Input("mostrarCampos") public mostrarCampos: boolean = true;
  @Input("datosUsuarios") public datosUsuarios: any;
  @Output("cancelarForm") public cancelarForm = new EventEmitter();
  // public persona: FormGroup | any;
  public cuil_medio: string = "";
  public submitted: boolean = false;
  private usuarioid: number = 0;
  public persona: FormGroup;

  constructor( private _fb: FormBuilder, private _util: UtilService, private _msj: NotificacionService, private _usuarioService: UsuarioService) {
    this.persona = _fb.group({
    nro_documento: ['', [Validators.required, Validators.minLength(7)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    cuil: '',
    cuil_prin: ['', [Validators.required, Validators.minLength(2)]],
    cuil_fin: ['', [Validators.required, Validators.minLength(1)]],
     usuario: _fb.group({
      personaid: '',
      username: ['', [Validators.required, Validators.minLength(3)]],
      rol: ['', [Validators.required]],
      moduloid: ['', [Validators.required]],
      localidadid: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', [Validators.required]],
      email: ['', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      }, { validators:  this.checkPasswords })
    });
  }

  ngOnInit(): void {
    if (this.datosUsuarios !== undefined) {
      this.editarDatosUsuario(this.datosUsuarios);
    }
  }

  /**
   * cancela el formulario
   */
  cancelar() {
    this.cancelarForm.emit(true);
  }
  /**
   * valida los datos del formulario
   * si los campos no han sido compoletados muestra un mensaje de error y los campos resaltados.
   * si se han completado los campos correctamente se aplica el guardado de datos, y se notifica si se ha guardado correctamete
   */
  validarForm() {
    this.submitted = true;

    if (!this._util.validarUltimoDigitoCuil(this.persona.get("cuil")?.value)){
      this._msj.showDanger("El numero de cuil es incorrecto, Por favor verifique el Número de Documento o los digitos de CUIL.");
      return;
    }
    if (this.persona.invalid || this.persona.value.usuario.invalid) { // verifico la validación en los campos del formulario
      this._msj.showDanger("Campos sin completar!!");
      return;
    }else{ // si pasa la validación
      let params = this.persona.value;

      params['usuario']['modulo'] = this.obtenerDatosModulo(params['usuario'].moduloid);

      this.guardarUsuario(params);
    }
  }
  /**
   * guardado de usuario al completar y ser validado del formulario
   * @param params valores utilizados para el guardado de un usuario
   */
  public guardarUsuario(params: object) {
    console.log(params);

    this._usuarioService.guardar(params).subscribe(
      respuesta => {
        this._msj.showSuccess("Se ha guardado el usuario con exito.");
        this.cancelarForm.emit(false);
      }, error => {
        this._msj.showDanger(error);
      }
    )
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
   * @function soloNumero valida que los datos ingresados en un input sean solo numeros.
   * @param datos objeto que contiene los datos de un input.
   */
  public soloNumero(datos:any){
    if (!this._util.validarNumero(datos.value)) {
      datos.value = datos.value.substring(0,datos.value.length - 1);
    }
  }
  /**
   * @function validarCuil valida el numero de cuil que esta en el medio
   * @param nroDocumento número de documento para ser validado.
   */
  public validarCuil(nroDocumento:string) {
    if (nroDocumento.length == 7) {
      this.cuil_medio = '0' + nroDocumento;
    }else{
      this.cuil_medio = nroDocumento;
    }
    return this.cuil_medio;
  }
  /**
   * @function armarCuil funcion que arma el cuil uniendo las variables de los formularios
   */
  public armarCuil(){
    const cuil_primero = this.persona.value.cuil_prin;
    const cuil_ult = this.persona.value.cuil_fin;
    // verifico si las variables son distintas a vacio
    // si la validacion es correcta seteo el valor del formulario con el cuil armado
    if ((cuil_primero != '' && cuil_primero != null) && (cuil_ult != '' && cuil_ult != null)) {
      let cuil = cuil_primero + this.cuil_medio + cuil_ult;

      this.validarPersonaPorCuil(cuil);

      return this.persona.controls.cuil.setValue(cuil);
    }else{ // si esta vacio seteo el valor del formulario en vacion
      return this.persona.controls.cuil.setValue('');
    }
  }
  /**
   * valido una persona por numero de cuil
   * @param cuil numero de cuil de la persona
   */
  public validarPersonaPorCuil(cuil: string) {
    /* Guardo los datos de cuil que son completados obligatoriamente para la busqueda */
    const nro_documento = this.persona.get('nro_documento')?.value;
    const cuil_pri = this.persona.get('cuil_prin')?.value;
    const cuil_fin = this.persona.get('cuil_fin')?.value;

    /* se busca al usuario por cuil */
    this._usuarioService.buscarPorCuil(cuil).subscribe(
      datos => {
        if (datos.success){
          const datosPersona = datos.resultado;
          // verifico si la persona tiene usuario
          if (datosPersona.usuario !== undefined) {
            this.persona.reset();
            this.cuil_medio = '';
            this._msj.showDanger("Este usuario ya esta registrado en el sistema.");
          }else{ // si la persona viene sin usuario completo el formulario de persona
            this.persona.patchValue(datosPersona);
            this.persona.get('usuario')?.patchValue({'personaid': datosPersona.id});
            this.persona.patchValue({'cuil_prin': cuil_pri});
            this.persona.patchValue({'cuil_fin': cuil_fin});
          }
        }else{
          this.persona.patchValue({'nro_documento': nro_documento});
          this.persona.patchValue({'cuil_prin': cuil_pri});
          this.persona.patchValue({'cuil_fin': cuil_fin});
          this.persona.get('usuario')?.patchValue({'personaid': ''});
        }
      }, error => { this._msj.showDanger(error); });
  }
  // reseteo el formulario y pongo las variables en vacio
  public resetForm(formGroup: FormGroup) {
    let control: AbstractControl | any = null;
    // formulario reset
    formGroup.reset();
    formGroup.markAsUntouched();
    this.usuarioid = 0;
    Object.keys(formGroup.controls).forEach((name) => {
        control = formGroup.controls[name];
        if(control instanceof FormGroup){
          this.resetForm(control)
        }else{
            control.setValue('');
            control.setErrors(null);
        }
    });
  }

  editarDatosUsuario(datosPersona: any) {
    this.persona.patchValue(datosPersona);
    this.persona.get('usuario')?.patchValue(datosPersona.usuario);
    this.persona.get('usuario')?.patchValue({'personaid': datosPersona.id});
    this.persona.get('usuario')?.patchValue({'password': ''});
    this.persona.get('usuario')?.patchValue({'confirmPass': ''});
    this.persona.get('usuario')?.get('moduloid')?.disable();
    this.persona.get('usuario')?.get('rol')?.disable();
  }

  public obtenerDatosModulo(id: number) {
    let modulo = this.listasArray.modulos.filter((mod: any) => { return (mod.id == id); });
    return modulo[0];
  }

}

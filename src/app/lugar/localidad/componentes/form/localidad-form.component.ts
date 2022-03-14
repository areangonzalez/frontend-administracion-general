import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentoService, LocalidadBackendService, NotificacionService, UtilService } from 'src/app/core/service';

@Component({
  selector: 'componente-localidad-form',
  templateUrl: './localidad-form.component.html',
  styleUrls: ['./localidad-form.component.scss']
})
export class LocalidadFormComponent implements OnInit {
  @Input("provincias") public provincias: any; // array que contiene el/los listados para el componente
  @Input("localidad") public localidad?: any;
  @Output("cancelarForm") public cancelarForm = new EventEmitter();
  public localidadForm: FormGroup;
  public submitted: boolean = false;
  public departamentos: any = [];
  public localidades: any = [];

  constructor(
    private _fb: FormBuilder, private _util: UtilService, private _departamentoService: DepartamentoService,
    private _localidadBackendService: LocalidadBackendService, private _msj: NotificacionService) {
    this.localidadForm = _fb.group({
      id: '',
      nombre: ['', [Validators.required]],
      codigo_postal: ['', [Validators.required, Validators.minLength(4)]],
      departamentoid: ['', [Validators.required]],
      provinciaid: ''
    });
  }

  ngOnInit(): void {
    if (this.localidad) {
      this.departamentoPorProvincia(this.localidad.provinciaid);
      this.localidadForm.patchValue(this.localidad);
    }
  }
  /**
   * busco los departamentos por el id de provincia
   * @param valor
   */
  public departamentoPorProvincia(valor: any) {

    if (valor.target.value != "") {
      let provinciaid = parseInt(valor.target.value);
      this._departamentoService.buscarPorProvinciaId(provinciaid).subscribe(
        respuesta => {
          this.departamentos = respuesta;
        }, error => { this._msj.showDanger(error); }
      );
    }else{
      this.departamentos = [];
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
   * Cancela el formulario y cierra el modal
   */
  public cancelar() {
    this.cancelarForm.emit(false);
  }
  /**
   * valida el formulario y guara una nueva localidad o la edita
   * @returns el cierre del modal
   */
  validarForm() {
    this.submitted = true;
    if (this.localidadForm.invalid) {
      return;
    }else{
      let nombre = this.localidadForm.controls.nombre.value;
      let params = this.localidadForm.value;
      if (params.id != '') { // editar
        this._localidadBackendService.guardar(params, params.id).subscribe(
          respuesta => {
            this._msj.showSuccess(respuesta.message);
            this.cancelarForm.emit(nombre);
          }, error => { this._msj.showDanger(error); });
        } else { // agregar
        this._localidadBackendService.guardar(params).subscribe(
          respuesta => {
            this._msj.showSuccess(respuesta.message);
            this.cancelarForm.emit(nombre);
          }, error => { this._msj.showDanger(error); });
      }
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/core/service';

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

  constructor(private _fb: FormBuilder, private _util: UtilService) {
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
      /* this._departamentoService.buscarPorProvinciaId(provinciaid).subscribe(
        respuesta => {
          this.departamentos = respuesta;
        }, error => { this._msj.cancelado(error); }
      ); */

      // borrar este ejmplo
      this.departamentos = [
        { id: 5, nombre: "Alberti", provinciaid: 2 },{ id: 6, nombre: "Avellaneda", provinciaid: 2 },
        { id: 7, nombre: "Ayacucho", provinciaid: 2 },{ id: 8, nombre: "Azul", provinciaid: 2 },
      ];
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
        /* this._localidadService.guardar(params, params.id).subscribe(
          respuesta => {
            this._msj.exitoso("Se ha editado Correctamente la localidad");
            this.cancelarForm.emit(nombre);
          }, error => { this._msj.cancelado(error); }); */
        } else { // agregar
        /* this._localidadService.guardar(params).subscribe(
          respuesta => {
            this._msj.exitoso("Se ha guardado correctamente la localidad");
            this.cancelarForm.emit(nombre);
          }, error => { this._msj.cancelado(error); }); */
      }
    }
  }
}
